import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProgramingProcedureModalComponent } from './add-programing-procedure-modal.component';

describe('AddProgramingProcedureModalComponent', () => {
  let component: AddProgramingProcedureModalComponent;
  let fixture: ComponentFixture<AddProgramingProcedureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProgramingProcedureModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddProgramingProcedureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
