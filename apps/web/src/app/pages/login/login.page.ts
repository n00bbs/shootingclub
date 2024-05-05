import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthModule, AuthService } from '../../services/auth';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPageComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  private redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/';

  username = '';
  password = '';

  ngAfterViewInit() {
    this.username = 'admin';
    this.password = 'admin';
    this.login();
  }

  async login() {
    await this.authService.login(this.username, this.password);
    console.log('Logged in', this.redirectUrl);
    this.router.navigateByUrl(this.redirectUrl);
  }
}

@NgModule({
  imports: [FormsModule, AuthModule],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent],
})
export class LoginPageModule {}
