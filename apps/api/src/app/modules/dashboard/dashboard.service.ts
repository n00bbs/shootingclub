import { Injectable, Query } from '@nestjs/common';
import { dashboard } from '@repo/types';
import { UserEntity } from '../../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MembersService } from '../members/members.service';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private userService: MembersService,
  ) {}

  async getData(username: string): Promise<dashboard.getData.ResponsePayload> {
    const user = await this.userRepository.findOne({
      where: { email: username },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return {
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        enoughAttendancesForAmmo:
          await this.userService.memberIsAllowedToBuyAmmo(user.id),
      },
    };
  }
}
