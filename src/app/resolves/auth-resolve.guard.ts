import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AccountService } from '../services/account.service';

export const authResolve: ResolveFn<any> = (route, state) => {
  return inject(AccountService).getCredentials()
};
