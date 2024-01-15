import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExerciseYearsModalComponent } from './create-exercise-years-modal.component';

describe('CreateExerciseYearsModalComponent', () => {
  let component: CreateExerciseYearsModalComponent;
  let fixture: ComponentFixture<CreateExerciseYearsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateExerciseYearsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateExerciseYearsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
