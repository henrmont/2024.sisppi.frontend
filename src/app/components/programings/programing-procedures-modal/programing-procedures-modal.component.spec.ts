import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramingProceduresModalComponent } from './programing-procedures-modal.component';

describe('ProgramingProceduresModalComponent', () => {
  let component: ProgramingProceduresModalComponent;
  let fixture: ComponentFixture<ProgramingProceduresModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramingProceduresModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramingProceduresModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
