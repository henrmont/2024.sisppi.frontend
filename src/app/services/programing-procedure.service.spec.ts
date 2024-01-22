import { TestBed } from '@angular/core/testing';

import { ProgramingProcedureService } from './programing-procedure.service';

describe('ProgramingProcedureService', () => {
  let service: ProgramingProcedureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramingProcedureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
