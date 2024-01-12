import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { Observable } from 'rxjs';

export const roleGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const accountService = inject(AccountService)
  let avaliablePermissions = route.data['permissions']

  return new Observable<boolean>(obs => {
    accountService.getAccountPermissions().subscribe({
      next: (response: any) => {
        if ((avaliablePermissions.filter((x: any) => response.includes(x))).length != 0) {
          obs.next(true);
        } else {
          obs.next(false);
          router.navigate(['/dashboard'])
        }
      },
      error: () => {
        obs.next(false);
        router.navigate(['/dashboard'])
      }
    })
  });

};
