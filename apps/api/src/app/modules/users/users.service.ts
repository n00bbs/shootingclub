import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { UserEntity } from '../../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  getAllUsers() {
    return this.userRepository.find();
  }
}
