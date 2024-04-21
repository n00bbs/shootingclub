import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MemberEntity } from '../../entities/member.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { members } from '@repo/types';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(MemberEntity)
    private readonly membersRepository: Repository<MemberEntity>,
  ) {}

  async getAll(): Promise<members.getAll.ResponsePayload> {
    const result = await this.membersRepository.find();
    const mappedMembers = result.map(
      (member): members.getAll.Member => ({
        id: member.id,
        name: `${member.firstName} ${member.lastName}`,
        departments: [],
      }),
    );
    return {
      data: mappedMembers,
    };
  }
}
