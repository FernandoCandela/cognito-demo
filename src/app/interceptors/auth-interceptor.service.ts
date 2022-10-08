import { environment } from './../../environments/environment';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService  implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let intReq = request;
    const token = this.authService.getToken();
    if(token != null) {
      intReq = request.clone({headers: request.headers.set(environment.AUTHORIZATION, environment.BEARER + token)});
    }
    return next.handle(intReq);
  }
}

export const interceptorApiRestProvider = [ {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService , multi: true}]
