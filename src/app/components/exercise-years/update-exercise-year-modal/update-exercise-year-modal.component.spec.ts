import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExerciseYearModalComponent } from './update-exercise-year-modal.component';

describe('UpdateExerciseYearModalComponent', () => {
  let component: UpdateExerciseYearModalComponent;
  let fixture: ComponentFixture<UpdateExerciseYearModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateExerciseYearModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateExerciseYearModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
