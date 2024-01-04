import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const token = window.localStorage.getItem('token')
  if (token) {
    return true;
  }
  router.navigate(['/login'])
  return false;
};
