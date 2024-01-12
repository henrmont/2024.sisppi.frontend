import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { roleResolveGuard } from './role-resolve.guard';

describe('roleResolveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => roleResolveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
