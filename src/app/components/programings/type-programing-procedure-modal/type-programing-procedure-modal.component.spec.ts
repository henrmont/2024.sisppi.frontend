import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeProgramingProcedureModalComponent } from './type-programing-procedure-modal.component';

describe('TypeProgramingProcedureModalComponent', () => {
  let component: TypeProgramingProcedureModalComponent;
  let fixture: ComponentFixture<TypeProgramingProcedureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeProgramingProcedureModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeProgramingProcedureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
