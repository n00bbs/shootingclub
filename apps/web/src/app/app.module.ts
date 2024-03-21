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
import { DefaultLayoutComponent } from './layouts/default/default.layout';
const appComponents = [AppComponent, DefaultLayoutComponent];

@NgModule({
  imports: [...baseModules, ...materialModules],
  declarations: [...appComponents],
  bootstrap: [AppComponent],
})
export class AppModule {}
