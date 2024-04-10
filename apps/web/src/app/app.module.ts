import { NgModule } from '@angular/core';

// Base Modules
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
const baseModules = [
  BrowserModule,
  CommonModule,
  FormsModule,
  RouterModule.forRoot(routes),
  RouterOutlet,
  BrowserAnimationsModule,
];

// Material UI
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
const materialModules = [
  MatSlideToggleModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
];

// App Components
import { AppComponent } from './app.component';
import { DefaultLayoutModule } from './layouts/default';
import { DashboardPageModule } from './pages/dashboard';
import { DepartmentsPageModule } from './pages/departments';
import { MembersPageModule } from './pages/members';
import { ProfilePageModule } from './pages/profile';
import { UsersPageModule } from './pages/users';
import { WeaponsPageModule } from './pages/weapons';
const appModules = [
  DefaultLayoutModule,
  DashboardPageModule,
  DepartmentsPageModule,
  MembersPageModule,
  ProfilePageModule,
  UsersPageModule,
  WeaponsPageModule,
];

@NgModule({
  imports: [...baseModules, ...materialModules, ...appModules],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
