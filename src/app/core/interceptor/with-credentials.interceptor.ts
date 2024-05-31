import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class WithCredentialsInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  private static setAuthorizationHeader(req: HttpRequest<any>, accessToken: string | null): HttpRequest<any> {

    if (accessToken && accessToken !== '' && !req.url.includes('amazonaws.com')) {

      const authorizationToken = `Bearer ${accessToken}`;
      const headers = req.headers.set('Authorization', authorizationToken);
      return req.clone({ headers });
    } else {

      return req;
    }
  }

  private static setReferer(req: HttpRequest<any>, tenant: string): HttpRequest<any> {

    if (tenant !== undefined) {

      const headers = req.headers.set('X-Referer', tenant);
      return req.clone({ headers });
    } else {

      return req;
    }
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authorizedRequest = this.setHeaders(request);
    const handledRequest = next.handle(authorizedRequest);
    // @ts-ignore
    const interceptionOperator = catchError(error => {
      if (error.error instanceof ErrorEvent) {
        // client-side error
      } else {
        // server-side error
        if (error.status === 401 || error.status === 403) {
          this.router.navigate(['/auth']);
        }
      }
    });
    return handledRequest.pipe(interceptionOperator);
  }

  private setHeaders = (req: HttpRequest<any>): HttpRequest<any> => {

    const accessToken = localStorage.getItem('accessToken');

    req = WithCredentialsInterceptor.setAuthorizationHeader(req, accessToken);

    return req;
  }

}
