import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

platformBrowserDynamic().bootstrapModule(AppModule);
