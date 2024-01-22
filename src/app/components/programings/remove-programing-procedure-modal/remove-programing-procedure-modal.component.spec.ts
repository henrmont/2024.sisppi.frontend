import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveProgramingProcedureModalComponent } from './remove-programing-procedure-modal.component';

describe('RemoveProgramingProcedureModalComponent', () => {
  let component: RemoveProgramingProcedureModalComponent;
  let fixture: ComponentFixture<RemoveProgramingProcedureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveProgramingProcedureModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveProgramingProcedureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
