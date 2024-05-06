import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/user.entity';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { MembersModule } from '../members/members.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), MembersModule],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
