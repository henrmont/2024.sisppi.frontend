import { TestBed } from '@angular/core/testing';

import { OrganizationFormService } from './organization-form.service';

describe('OrganizationFormService', () => {
  let service: OrganizationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
