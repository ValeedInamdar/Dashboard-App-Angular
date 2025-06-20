import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService); // or use AuthService

  if (!authService.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
