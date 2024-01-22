import { TestBed } from '@angular/core/testing';

import { ProgramingService } from './programing.service';

describe('ProgramingService', () => {
  let service: ProgramingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
