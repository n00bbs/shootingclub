import { Component, NgModule } from '@angular/core';
import { AuthModule, AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutPageComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.authService.logout();
    this.router.navigate([]);
  }
}

@NgModule({
  imports: [AuthModule],
  declarations: [LogoutPageComponent],
  exports: [LogoutPageComponent],
})
export class LogoutPageModule {}
