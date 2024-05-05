import { Controller, Get, Req, Patch, Param, Post } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { departments } from '@repo/types';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Get('getAll')
  getAll(): Promise<departments.getAll.ResponsePayload> {
    return this.departmentsService.getAll();
  }

  @Get('getOne/:id')
  getOne(
    @Param('id')
    id: string,
  ): Promise<departments.getOne.ResponsePayload> {
    return this.departmentsService.getOne(id);
  }

  @Patch('updateDepartmentFee/:id')
  updateDepartmentFee(
    @Param('id')
    id: string,
    @Req()
    req: Record<string, unknown>,
  ): Promise<departments.updateDepartmentFee.ResponsePayload> {
    const payload = req[
      'body'
    ] as departments.updateDepartmentFee.RequestPayload;
    return this.departmentsService.updateDepartmentFee(id, payload.fee);
  }

  @Patch('updateDepartmentColor/:id')
  updateDepartmentColor(
    @Param('id')
    id: string,
    @Req()
    req: Record<string, unknown>,
  ): Promise<departments.updateDepartmentColor.ResponsePayload> {
    const payload = req[
      'body'
    ] as departments.updateDepartmentColor.RequestPayload;
    return this.departmentsService.updateDepartmentColor(id, payload.color);
  }

  @Post('createDepartment')
  createDepartment(
    @Req()
    req: Record<string, unknown>,
  ): Promise<departments.createDepartment.ResponsePayload> {
    const payload = req['body'] as departments.createDepartment.RequestPayload;
    return this.departmentsService.createDepartment(
      payload.name,
      payload.fee,
      payload.color,
    );
  }
}
