import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { getUserRoles } from '../util/userRoles';

export const AuthenticatedUserRoles = createParamDecorator(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    return getUserRoles(req);
  },
);
