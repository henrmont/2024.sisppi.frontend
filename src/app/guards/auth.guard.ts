import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { Observable } from 'rxjs';
import { SharedService } from '../services/shared.service';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const user = inject(AccountService).getCredentials()
  const sharedService = inject(SharedService)
  const token = window.localStorage.getItem('token')

  return new Observable<boolean>(obs => {
    user.subscribe({
      next: (response: any) => {
        if (response.is_valid && token) {
          obs.next(true);
        } else {
          obs.next(false);
          window.localStorage.clear();
          sharedService.showMessage('Credenciais inválida')
          router.navigate(['/login'])
        }
      },
      error: () => {
        obs.next(false);
        window.localStorage.clear();
        router.navigate(['/login'])
      }
    })
  });

};
