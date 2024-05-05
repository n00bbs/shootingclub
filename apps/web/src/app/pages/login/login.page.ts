import { AfterViewInit, Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthModule, AuthService } from '../../services/auth';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPageComponent implements AfterViewInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  private redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/';

  username = '';
  password = '';

  hide = true;

  ngAfterViewInit() {
    // this.username = 'admin';
    // this.password = 'admin';
    // this.login();
  }

  redirectToRegisterPage() {
    this.router.navigate(['/register']);
  }

  async login() {
    await this.authService.login(this.username, this.password);
    console.log('Logged in', this.redirectUrl);
    this.router.navigateByUrl(this.redirectUrl);
  }
}

@NgModule({
  imports: [
    FormsModule,
    AuthModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent],
})
export class LoginPageModule {}
