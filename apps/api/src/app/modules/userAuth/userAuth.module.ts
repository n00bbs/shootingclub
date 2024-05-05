import { Module } from '@nestjs/common';
import { UserAuthController } from './userAuth.controller';
import { UserAuthService } from './userAuth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/user.entity';
import { RoleEntity } from '../../entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, RoleEntity])],
  controllers: [UserAuthController],
  providers: [UserAuthService],
})
export class UserAuthModule {}
