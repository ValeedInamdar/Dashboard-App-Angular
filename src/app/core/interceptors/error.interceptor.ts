import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let message = 'An unknown error occurred.';

      if (error.error instanceof ErrorEvent) {
        message = `Client-side error: ${error.error.message}`;
      } else {
        switch (error.status) {
          case 0:
            message = 'Network error - check your connection.';
            break;
          case 400:
            message = 'Bad request.';
            break;
          case 401:
            message = 'Unauthorized - redirecting to login.';
            router.navigate(['/login']);
            break;
          case 403:
            message = "Forbidden - you don't have access.";
            break;
          case 404:
            message = 'Not found.';
            break;
          case 500:
            message = 'Internal server error.';
            break;
        }
      }

      alert(message); // Replace with a toast/snackbar in real apps

      return throwError(() => error);
    })
  );
};
