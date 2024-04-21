import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { members } from '@repo/types';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly membersRepository: Repository<UserEntity>,
  ) {}

  async getAll(): Promise<members.getAll.ResponsePayload> {
    const result = await this.membersRepository.find();
    const mappedMembers = result.map(
      (member): members.getAll.Member => ({
        id: member.id,
        name: `${member.firstName} ${member.lastName}`,
        departments: member.departments?.map(
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
}
