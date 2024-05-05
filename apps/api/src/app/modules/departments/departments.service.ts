import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { departments } from '@repo/types';
import { DepartmentEntity } from '../../entities/department.entity';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(DepartmentEntity)
    private readonly departmentsRepository: Repository<DepartmentEntity>,
  ) {}

  async getAll(): Promise<departments.getAll.ResponsePayload> {
    const result = await this.departmentsRepository.find();
    const mappedDepartments = result.map(
      (department): departments.getAll.Department => ({
        id: department.id,
        name: department.name,
        fee: department.fee,
        color: department.color,
      }),
    );
    return {
      data: mappedDepartments,
    };
  }

  async getOne(id: string): Promise<departments.getOne.ResponsePayload> {
    const result = await this.departmentsRepository.findOne({
      where: { id },
    });
    if (!result) {
      throw new Error('Department not found');
    }

    return {
      id: result.id,
      name: result.name,
      fee: result.fee,
      color: result.color,
    };
  }

  async updateDepartmentFee(
    id: string,
    fee: number,
  ): Promise<departments.updateDepartmentFee.ResponsePayload> {
    const result = await this.departmentsRepository.update({ id }, { fee });
    if (!result) throw new Error('Department not found');
    return {};
  }

  async updateDepartmentColor(
    id: string,
    color: string,
  ): Promise<departments.updateDepartmentColor.ResponsePayload> {
    const result = await this.departmentsRepository.update({ id }, { color });
    if (!result) throw new Error('Department not found');
    return {};
  }

  async createDepartment(
    name: string,
    fee: number,
    color: string,
  ): Promise<departments.createDepartment.ResponsePayload> {
    const newDepartment = this.departmentsRepository.create({
      name,
      fee,
      color,
    });
    const result = await this.departmentsRepository.save(newDepartment);
    if (!result) throw new Error('Failed creating Department');
    return this.getAll();
  }
}
