import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteExerciseYearModalComponent } from './delete-exercise-year-modal.component';

describe('DeleteExerciseYearModalComponent', () => {
  let component: DeleteExerciseYearModalComponent;
  let fixture: ComponentFixture<DeleteExerciseYearModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteExerciseYearModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteExerciseYearModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
