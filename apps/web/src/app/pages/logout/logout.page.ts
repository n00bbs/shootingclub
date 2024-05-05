import { Component, NgModule, OnInit } from '@angular/core';
import { AuthModule, AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutPageComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

@NgModule({
  imports: [AuthModule],
  declarations: [LogoutPageComponent],
  exports: [LogoutPageComponent],
})
export class LogoutPageModule {}
