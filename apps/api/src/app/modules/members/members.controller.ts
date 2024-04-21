import { Controller, Get } from '@nestjs/common';
import { MembersService } from './members.service';
import { members } from '@repo/types';

@Controller('members')
export class MembersController {
  constructor(private readonly usersService: MembersService) {}

  @Get('getAll')
  getAll(): Promise<members.getAll.ResponsePayload> {
    return this.usersService.getAll();
  }
}
