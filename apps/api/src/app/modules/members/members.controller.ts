import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { MembersService } from './members.service';
import { members } from '@repo/types';

@Controller('members')
export class MembersController {
  constructor(private readonly usersService: MembersService) {}

  @Get('getAll')
  getAll(): Promise<members.getAll.ResponsePayload> {
    return this.usersService.getAll();
  }

  @Get('getOne/:id')
  getOne(
    @Param('id')
    id: string,
  ): Promise<members.getOne.ResponsePayload> {
    return this.usersService.getOne(id);
  }

  @Post('createUserDepartmentChange/:userId')
  createUserDepartmentChange(
    @Param('userId')
    userId: string,
    @Req() req,
  ): Promise<members.createUserDepartmentChange.ResponsePayload> {
    const payload: members.createUserDepartmentChange.RequestPayload = req.body;
    return this.usersService.createUserDepartmentChange(userId, payload);
  }
}
