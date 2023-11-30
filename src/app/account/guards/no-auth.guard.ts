import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const noAuthGuard: CanActivateChildFn = (childRoute, state) => {
  let router = inject(Router);
  const token = window.localStorage.getItem('token');
  if (token) {
    router.navigate(['/dashboard'])
  }
  return true;
};
