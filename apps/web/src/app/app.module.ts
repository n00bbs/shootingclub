import { NgModule } from '@angular/core';

// Base Modules
import { ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
const baseModules = [
  BrowserModule,
  RouterModule.forRoot(routes),
  RouterOutlet,
  BrowserAnimationsModule,
];

// App Components
import { AppComponent } from './app.component';
import { DefaultLayoutModule } from './layouts/default';
import { DashboardPageModule } from './pages/dashboard';
import { DepartmentsPageModule } from './pages/departments';
import { MembersPageModule } from './pages/members';
import { ProfilePageModule } from './pages/profile';
import { WeaponsPageModule } from './pages/weapons';
import { httpInterceptors } from './http-interceptors';
import { AuthModule } from './services/auth';
import { IsAuthenticatedGuard } from './guards/auth.guard';
import { LoginPageModule } from './pages/login/login.page';
const appModules = [
  AuthModule,
  DefaultLayoutModule,
  DashboardPageModule,
  DepartmentsPageModule,
  MembersPageModule,
  ProfilePageModule,
  WeaponsPageModule,
  LoginPageModule,
];

@NgModule({
  imports: [...baseModules, ...appModules],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [httpInterceptors],
})
export class AppModule {}
