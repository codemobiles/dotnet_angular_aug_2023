import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  // intercept the request message
  const router = inject(Router);
  console.log('request', req.method, req.url);
  console.log('authInterceptor');

  let token = localStorage.getItem(environment.token);

  if (token != null) {
    // has token but not sure if valid
    const cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });

    // intercept the response message
    // (next function will execute the request)
    // (pipe function will intercept the resposne)
    return next(cloned).pipe(
      catchError((error) => {
        if (
          error.status === 401 ||
          error.status === 403 ||
          error.status === 500
        ) {
          localStorage.removeItem(environment.token);
          router.navigate(['login']);
        }

        return throwError(() => error);
      })
    );
  } else {
    return next(req).pipe(tap((resp) => console.log('response', resp)));
  }
};
