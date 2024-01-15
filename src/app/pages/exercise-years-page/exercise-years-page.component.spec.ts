import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseYearsPageComponent } from './exercise-years-page.component';

describe('ExerciseYearsPageComponent', () => {
  let component: ExerciseYearsPageComponent;
  let fixture: ComponentFixture<ExerciseYearsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseYearsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciseYearsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
