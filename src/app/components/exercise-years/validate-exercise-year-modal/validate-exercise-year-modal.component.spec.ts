import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateExerciseYearModalComponent } from './validate-exercise-year-modal.component';

describe('ValidateExerciseYearModalComponent', () => {
  let component: ValidateExerciseYearModalComponent;
  let fixture: ComponentFixture<ValidateExerciseYearModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidateExerciseYearModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidateExerciseYearModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
