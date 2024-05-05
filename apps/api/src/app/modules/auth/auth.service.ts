import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { auth } from '@repo/types';
import { UserEntity } from '../../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async login(
    query: auth.login.QueryParams,
  ): Promise<auth.login.ResponsePayload> {
    const user = await this.userRepository.findOne({
      where: {
        email: query.email,
        passwordHash: query.password,
      },
      relations: {
        role: {},
      },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const roles = ['user'];
    if (user.role.name === 'admin') {
      roles.push('admin');
    }
    return {
      roles: roles,
    };
  }
}
