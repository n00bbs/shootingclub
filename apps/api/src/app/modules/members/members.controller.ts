import {
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { members } from '@repo/types';
import { DefaultAuthGuards } from '../../decorators/defaultAuthGuards.decorator';
import { AuthenticatedUserRoles } from '../../decorators/authenticatedUserRoles.decorator';

@Controller('members')
export class MembersController {
  constructor(private readonly usersService: MembersService) {}

  @Get('getAll')
  @DefaultAuthGuards()
  getAll(
    @AuthenticatedUserRoles()
    roles: string[],
  ): Promise<members.getAll.ResponsePayload> {
    if (!roles.includes('admin')) {
      throw new UnauthorizedException(
        "You don't have the required permissions to perform this action",
      );
    }
    return this.usersService.getAll();
  }

  @Get('getOne/:id')
  @DefaultAuthGuards()
  getOne(
    @Param('id')
    id: string,
    @AuthenticatedUserRoles()
    roles: string[],
  ): Promise<members.getOne.ResponsePayload> {
    if (!roles.includes('admin')) {
      throw new UnauthorizedException(
        "You don't have the required permissions to perform this action",
      );
    }
    return this.usersService.getOne(id);
  }

  @Post('createUserDepartmentChange/:userId')
  @DefaultAuthGuards()
  createUserDepartmentChange(
    @Param('userId')
    userId: string,
    @Req() req,
    @AuthenticatedUserRoles()
    roles: string[],
  ): Promise<members.createUserDepartmentChange.ResponsePayload> {
    if (!roles.includes('admin')) {
      throw new UnauthorizedException(
        "You don't have the required permissions to perform this action",
      );
    }
    const payload: members.createUserDepartmentChange.RequestPayload = req.body;
    return this.usersService.createUserDepartmentChange(userId, payload);
  }

  @Post('createMember')
  @DefaultAuthGuards()
  createMember(
    @Req() req,
    @AuthenticatedUserRoles()
    roles: string[],
  ): Promise<members.createMember.ResponsePayload> {
    if (!roles.includes('admin')) {
      throw new UnauthorizedException(
        "You don't have the required permissions to perform this action",
      );
    }
    const payload: members.createMember.RequestPayload = req.body;
    return this.usersService.createMember(payload);
  }

  @Patch('updateMember/:userId')
  @DefaultAuthGuards()
  updateMember(
    @Param('userId')
    userId: string,
    @Req() req,
    @AuthenticatedUserRoles()
    roles: string[],
  ): Promise<members.updateMember.ResponsePayload> {
    if (!roles.includes('admin')) {
      throw new UnauthorizedException(
        "You don't have the required permissions to perform this action",
      );
    }
    const payload: members.updateMember.RequestPayload = req.body;
    return this.usersService.updateMember(userId, payload);
  }
}
