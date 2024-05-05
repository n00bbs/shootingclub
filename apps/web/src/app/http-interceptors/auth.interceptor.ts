import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const credentials = this.authService.getCredentials();
    if (!credentials) {
      return next.handle(request);
    }
    const newRequest = request.clone({
      setParams: {
        email: credentials.username,
        password: credentials.password,
      },
    });
    return next.handle(newRequest);
  }
}
