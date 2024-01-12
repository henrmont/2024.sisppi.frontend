import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AccountService } from '../services/account.service';

export const roleResolve: ResolveFn<any> = (route, state) => {
  return inject(AccountService).getAccountPermissions()
};
