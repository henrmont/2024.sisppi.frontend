import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { titleResolveGuard } from './title-resolve.guard';

describe('titleResolveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => titleResolveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
