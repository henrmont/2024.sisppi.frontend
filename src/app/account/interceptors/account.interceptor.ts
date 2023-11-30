import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AccountService } from '../services/account.service';
import { catchError, switchMap, throwError } from 'rxjs';

export const accountInterceptor: HttpInterceptorFn = (req, next) => {
  const accountService = inject(AccountService)
  const accessToken = window.localStorage.getItem('token')
  let authreq = req.clone({
    setHeaders: {
        Authorization: `Bearer ${accessToken}`
    }
  });
  return next(authreq).pipe(
    catchError(
      (error) => {
        if([401,403].includes(error.status) && window.localStorage.getItem('token')) {
          return accountService.refreshToken().pipe(
            switchMap(
              (response: any) => {
                window.localStorage.setItem('token', response.access_token)
                if (window.localStorage.getItem('token')) {
                  authreq = req.clone({
                    setHeaders: {
                        Authorization: `Bearer ${window.localStorage.getItem('token')}`
                    }
                  });
                }

                return next(authreq)
              }
            ),
            catchError(
              (error) => {
                return throwError(() => error)
              }
            )
          )
        }
        return throwError(() => error)
      }
    )
  );
};
