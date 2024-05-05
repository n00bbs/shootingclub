import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthModule, AuthService } from '../../services/auth';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPageComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  private redirectUrl = this.route.snapshot.queryParams['redirectUrl'];

  username = '';
  password = '';
  first_name = '';
  last_name = '';
  birthdate = '';

  hide = true;

  redirectToLoginPage() {
    this.router.navigate(['/login'], {
      queryParams: { redirectUrl: this.redirectUrl },
    });
  }

  async register() {
    const parsedBirthdate = new Date(this.birthdate);
    await this.authService.register(
      this.username,
      this.password,
      this.first_name,
      this.last_name,
      parsedBirthdate,
    );
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
    MatDatepickerModule,
  ],
  providers: [provideNativeDateAdapter()],
  declarations: [RegisterPageComponent],
  exports: [RegisterPageComponent],
})
export class RegisterPageModule {}
