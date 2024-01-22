import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountProgramingProcedureModalComponent } from './amount-programing-procedure-modal.component';

describe('AmountProgramingProcedureModalComponent', () => {
  let component: AmountProgramingProcedureModalComponent;
  let fixture: ComponentFixture<AmountProgramingProcedureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmountProgramingProcedureModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmountProgramingProcedureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
