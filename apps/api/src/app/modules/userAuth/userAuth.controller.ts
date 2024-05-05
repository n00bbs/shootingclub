import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import { UserAuthService } from './userAuth.service';
import { userAuth } from '@repo/types';

@Controller('auth')
export class UserAuthController {
  constructor(private readonly authService: UserAuthService) {}

  @Get('login')
  login(@Query() query: any): Promise<any> {
    return this.authService.login(query);
  }

  @Post('register')
  register(@Req() req: any): Promise<any> {
    const payload = req.body as any;
    return this.authService.register(payload);
  }
}
