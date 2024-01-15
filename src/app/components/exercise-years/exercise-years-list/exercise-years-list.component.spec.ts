import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseYearsListComponent } from './exercise-years-list.component';

describe('ExerciseYearsListComponent', () => {
  let component: ExerciseYearsListComponent;
  let fixture: ComponentFixture<ExerciseYearsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseYearsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciseYearsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
