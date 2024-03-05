import { NgModule } from '@angular/core';

// Base Modules
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
const baseModules = [
  BrowserModule,
  CommonModule,
  FormsModule,
  RouterModule.forRoot(routes),
  RouterOutlet,
  BrowserAnimationsModule,
];

// // Material UI
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// const materialModules = [MatSlideToggleModule];

// SC ui
import { ScBaseLayoutModule } from '@repo/ui';
const scModules = [ScBaseLayoutModule];

// App Components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
const appComponents = undefined;

@NgModule({
  imports: [...baseModules, ...scModules],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
