import { TestBed } from '@angular/core/testing';

import { IncentiveDestinationService } from './incentive-destination.service';

describe('IncentiveDestinationService', () => {
  let service: IncentiveDestinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncentiveDestinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
