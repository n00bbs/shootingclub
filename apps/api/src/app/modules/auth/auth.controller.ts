import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { auth } from '@repo/types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  login(
    @Query() query: auth.login.QueryParams,
  ): Promise<auth.login.ResponsePayload> {
    return this.authService.login(query);
  }
}
