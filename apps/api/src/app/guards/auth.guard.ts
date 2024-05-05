import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { setUserRoles } from '../util/userRoles';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const query = request.query;
    if (!query.email || !query.password) {
      return false;
    }
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
      return false;
    }

    const roles = ['user'];
    if (user.role.name === 'admin') {
      roles.push('admin');
    }

    setUserRoles(request, roles);
    return true;
  }
}
