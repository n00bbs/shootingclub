import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { auth } from '@repo/types';
import { UserEntity } from '../../entities/user.entity';
import { Repository } from 'typeorm';
import { RoleEntity } from '../../entities/role.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
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
    return {
      roles: this.calculateRoles(user),
    };
  }

  private async getDefaultRole() {
    let role = await this.roleRepository.findOne({
      where: {
        isDefault: true,
      },
    });
    if (!role) {
      const newRole = this.roleRepository.create({
        name: 'user',
        isDefault: true,
        updatedAt: new Date(),
      });
      role = await this.roleRepository.save(newRole);
    }
    return role;
  }

  private calculateRoles(user: UserEntity) {
    const roles = ['user'];
    if (user.role.name === 'admin') {
      roles.push('admin');
    }
    return roles;
  }

  async register(
    payload: auth.register.RequestPayload,
  ): Promise<auth.register.ResponsePayload> {
    const newUser = this.userRepository.create({
      birthDate: payload.birthdate,
      email: payload.username,
      firstName: payload.first_name,
      lastName: payload.last_name,
      joinedAt: new Date(),
      passwordHash: payload.password,
      role: await this.getDefaultRole(),
      updatedAt: new Date(),
    });
    await this.userRepository.save(newUser);
    return {
      roles: this.calculateRoles(newUser),
    };
  }
}
