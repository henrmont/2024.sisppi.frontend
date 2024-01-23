import { TestBed } from '@angular/core/testing';

import { MinisterialOrdinaceService } from './ministerial-ordinace.service';

describe('MinisterialOrdinaceService', () => {
  let service: MinisterialOrdinaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinisterialOrdinaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
