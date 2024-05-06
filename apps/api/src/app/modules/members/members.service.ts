import { Injectable } from '@nestjs/common';
import { Between, IsNull, Or, Repository } from 'typeorm';
import { UserEntity } from '../../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { members } from '@repo/types';
import { hashDate } from '../../util/hashDate';
import { UserDepartmentChangeEntity } from '../../entities/userDepartmentChange.entity';
import { DepartmentEntity } from '../../entities/department.entity';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly membersRepository: Repository<UserEntity>,
    @InjectRepository(DepartmentEntity)
    private readonly departmentRepository: Repository<DepartmentEntity>,
    @InjectRepository(UserDepartmentChangeEntity)
    private readonly departmentChangeRepository: Repository<UserDepartmentChangeEntity>,
  ) {}

  private calculateCurrentDepartments(
    departmentChanges: UserDepartmentChangeEntity[],
  ): DepartmentEntity[] {
    return departmentChanges
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
      .reduce<DepartmentEntity[]>((acc, change) => {
        if (change.changeType === 'join') {
          if (
            acc.some((department) => department.id === change.department.id)
          ) {
            return acc;
          }
          return [...acc, change.department];
        }
        return acc.filter(
          (department) => department.id !== change.department.id,
        );
      }, []);
  }

  async getAll(): Promise<members.getAll.ResponsePayload> {
    const result = await this.membersRepository.find({
      relations: {
        departmentChanges: {
          department: {},
        },
      },
    });
    const mappedMembers = result.map(
      (member): members.getAll.Member => ({
        id: member.id,
        firstName: member.firstName,
        lastName: member.lastName,
        departments: this.calculateCurrentDepartments(
          member.departmentChanges,
        )?.map(
          (department): members.getAll.Department => ({
            id: department.id,
            name: department.name,
            color: department.color,
          }),
        ),
      }),
    );
    return {
      data: mappedMembers,
    };
  }

  async getOne(id: string): Promise<members.getOne.ResponsePayload> {
    const result = await this.membersRepository.findOne({
      where: { id },
      relations: {
        departmentChanges: {
          department: {},
        },
      },
    });
    if (!result) {
      throw new Error('Member not found');
    }
    const allDepartments = await this.departmentRepository.find();

    const currentDepartments = this.calculateCurrentDepartments(
      result.departmentChanges,
    );

    return {
      id: result.id,
      first_name: `${result.firstName}`,
      last_name: `${result.lastName}`,
      email: result.email,
      address: {
        street_name: result.address.streetName,
        street_number: result.address.streetNumber,
        city: {
          id: result.address.city.id,
          name: result.address.city.name,
          postal_code: result.address.city.postalCode,
        },
      },
      updateHash: hashDate(result.updatedAt),
      departments: allDepartments.map(
        (department): members.getOne.Department => ({
          id: department.id,
          name: department.name,
          color: department.color,
          joined: currentDepartments.some(
            (currentDepartment) => currentDepartment.id === department.id,
          ),
        }),
      ),
    };
  }

  async createUserDepartmentChange(
    userId: string,
    payload: members.createUserDepartmentChange.RequestPayload,
  ): Promise<members.createUserDepartmentChange.ResponsePayload> {
    const user = await this.membersRepository.findOne({
      where: { id: userId },
    });
    if (!user) {
      throw new Error('User not found');
    }
    const department = await this.departmentRepository.findOne({
      where: { id: payload.departmentId },
    });
    if (!department) {
      throw new Error('Department not found');
    }
    await this.departmentChangeRepository.save({
      user,
      department,
      changeType: payload.type,
    });
    return {
      success: true,
    };
  }

  async memberIsAllowedToBuyAmmo(userId: string): Promise<boolean> {
    const oneYearAgo = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);

    const user = await this.membersRepository.findOne({
      where: {
        id: userId,
        attendances: {
          date: Or(Between(oneYearAgo, new Date()), IsNull()),
        },
      },
      relations: {
        attendances: {},
      },
    });
    if (!user) {
      throw new Error('User not found');
    }
    const attendances = user.attendances;
    if (attendances.length >= 18) {
      return true;
    } else {
      for (let month = 0; month < 12; month++) {
        const monthAgo = new Date(
          Date.now() - month * 30 * 24 * 60 * 60 * 1000,
        );
        const monthEndAgo = new Date(
          Date.now() - (month + 1) * 30 * 24 * 60 * 60 * 1000,
        );
        const attendancesInMonth = attendances.filter(
          (attendance) =>
            attendance.date > monthEndAgo && attendance.date < monthAgo,
        );
        if (attendancesInMonth.length < 1) {
          return false;
        }
      }
      return true;
    }
  }

  async createMember(
    payload: members.createMember.RequestPayload,
  ): Promise<members.createMember.ResponsePayload> {
    const newMember = this.membersRepository.create({
      email: payload.email,
      firstName: payload.first_name,
      lastName: payload.last_name,
      birthDate: payload.birthdate,
    });

    await this.membersRepository.save(newMember);
    return this.getAll();
  }
}
