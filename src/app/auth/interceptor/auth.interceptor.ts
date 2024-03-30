import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {
    console.log('In interceptor !!!');
  }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //const params = new HttpParams().set('access_token', localStorage.getItem('token') ?? '');
    const authService = inject(AuthService);
    if (authService.isAuthenticated()){
      const headers = new HttpHeaders().set(
        'Authorization',
        localStorage.getItem('token') ?? ''
      );
      const cloneReq = request.clone({headers});
      return next.handle(cloneReq);
    }
    return next.handle(request);
  }
}
