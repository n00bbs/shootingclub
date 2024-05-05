import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HostnameInterceptor implements HttpInterceptor {
  private apiHost: string = 'http://localhost:3000';

  private isNotApiRequest(req: HttpRequest<unknown>): boolean {
    return !req.url.startsWith('api') || !req.url.startsWith('/api');
  }

  concatUrl(...parts: string[]): string {
    return parts.map((part) => part.replace(/(^\/|\/$)/g, '')).join('/');
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    if (!request.url.startsWith('http') && this.isNotApiRequest(request)) {
      const newRequest = request.clone({
        url: this.concatUrl(this.apiHost, request.url),
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
