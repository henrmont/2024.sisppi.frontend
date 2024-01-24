import { TestBed } from '@angular/core/testing';

import { MinisterialOrdinaceDestinationService } from './ministerial-ordinace-destination.service';

describe('MinisterialOrdinaceDestinationService', () => {
  let service: MinisterialOrdinaceDestinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinisterialOrdinaceDestinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
