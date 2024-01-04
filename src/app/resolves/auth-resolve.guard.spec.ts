import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authResolveGuard } from './auth-resolve.guard';

describe('authResolveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authResolveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
