import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import { HostnameInterceptor } from './hostname.interceptor';
import { AuthInterceptor } from './auth.interceptor';

export const httpInterceptors: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HostnameInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
];
