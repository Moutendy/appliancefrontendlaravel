import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthentificationService } from 'src/app/views/core/auth/authentification.service';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private auth: AuthentificationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const apiKey = 'Rohol Amin'
    // request = request.clone({
    //     setHeaders: {
    //         'api-key': apiKey,
    //     }
    // })
   
    if(this.auth.isAuthenticated())
    {
      const token = this.auth.getToken();

      if(token)
      {
        request=this.addAccessTokenToHeader(request,token);
      }
    }
    return next.handle(request).pipe(
      tap({
          error: (error: HttpErrorResponse) => {
              if (error.status == 401 || error.status == 403) {
                 
              }

              // return this.handleRefreshToken(request, next);
          },
      })
  );
  }

  addAccessTokenToHeader(request: HttpRequest<unknown>, token: string) {
    return request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
}
}
