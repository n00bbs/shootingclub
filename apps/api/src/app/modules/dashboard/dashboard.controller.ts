import { Controller, Get, Query } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { dashboard } from '@repo/types';
import { DefaultAuthGuards } from '../../decorators/defaultAuthGuards.decorator';

@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @Get('getData')
  @DefaultAuthGuards()
  async getData(
    @Query('username')
    username: string,
  ): Promise<dashboard.getData.ResponsePayload> {
    return this.dashboardService.getData(username);
  }
}
