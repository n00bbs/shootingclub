import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
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
        name: `${member.firstName} ${member.lastName}`,
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

    const mappedDepartments = allDepartments.map(
      (department): members.getOne.Department => ({
        id: department.id,
        name: department.name,
        color: department.color,
        joined: currentDepartments.some(
          (currentDepartment) => currentDepartment.id === department.id,
        ),
      }),
    );

    return {
      id: result.id,
      name: `${result.firstName} ${result.lastName}`,
      email: result.email,
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
}
