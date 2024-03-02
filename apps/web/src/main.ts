import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { a } from '@repo/types';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);

const b: a = 'x';
