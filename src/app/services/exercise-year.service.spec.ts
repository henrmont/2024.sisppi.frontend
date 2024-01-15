import { TestBed } from '@angular/core/testing';

import { ExerciseYearService } from './exercise-year.service';

describe('ExerciseYearService', () => {
  let service: ExerciseYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
