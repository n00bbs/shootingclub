import {
  Controller,
  Get,
  Req,
  Patch,
  Param,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { departments } from '@repo/types';
import { AuthenticatedUserRoles } from '../../decorators/authenticatedUserRoles.decorator';
import { DefaultAuthGuards } from '../../decorators/defaultAuthGuards.decorator';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Get('getAll')
  @DefaultAuthGuards()
  getAll(
    @AuthenticatedUserRoles()
    roles: string[],
  ): Promise<departments.getAll.ResponsePayload> {
    if (!roles.includes('admin')) {
      throw new UnauthorizedException(
        "You don't have the required permissions to perform this action",
      );
    }
    return this.departmentsService.getAll();
  }

  @Get('getOne/:id')
  @DefaultAuthGuards()
  getOne(
    @Param('id')
    id: string,
    @AuthenticatedUserRoles()
    roles: string[],
  ): Promise<departments.getOne.ResponsePayload> {
    if (!roles.includes('admin')) {
      throw new UnauthorizedException(
        "You don't have the required permissions to perform this action",
      );
    }
    return this.departmentsService.getOne(id);
  }

  @Patch('updateDepartmentFee/:id')
  @DefaultAuthGuards()
  updateDepartmentFee(
    @Param('id')
    id: string,
    @Req()
    req: Record<string, unknown>,
    @AuthenticatedUserRoles()
    roles: string[],
  ): Promise<departments.updateDepartmentFee.ResponsePayload> {
    if (!roles.includes('admin')) {
      throw new UnauthorizedException(
        "You don't have the required permissions to perform this action",
      );
    }
    const payload = req[
      'body'
    ] as departments.updateDepartmentFee.RequestPayload;
    return this.departmentsService.updateDepartmentFee(id, payload.fee);
  }

  @Patch('updateDepartmentColor/:id')
  @DefaultAuthGuards()
  updateDepartmentColor(
    @Param('id')
    id: string,
    @Req()
    req: Record<string, unknown>,
    @AuthenticatedUserRoles()
    roles: string[],
  ): Promise<departments.updateDepartmentColor.ResponsePayload> {
    if (!roles.includes('admin')) {
      throw new UnauthorizedException(
        "You don't have the required permissions to perform this action",
      );
    }
    const payload = req[
      'body'
    ] as departments.updateDepartmentColor.RequestPayload;
    return this.departmentsService.updateDepartmentColor(id, payload.color);
  }

  @Post('createDepartment')
  @DefaultAuthGuards()
  createDepartment(
    @Req()
    req: Record<string, unknown>,
    @AuthenticatedUserRoles()
    roles: string[],
  ): Promise<departments.createDepartment.ResponsePayload> {
    if (!roles.includes('admin')) {
      throw new UnauthorizedException(
        "You don't have the required permissions to perform this action",
      );
    }
    const payload = req['body'] as departments.createDepartment.RequestPayload;
    return this.departmentsService.createDepartment(
      payload.name,
      payload.fee,
      payload.color,
    );
  }
}
