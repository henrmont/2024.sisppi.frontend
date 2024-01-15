import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCompetenceModalComponent } from './validate-competence-modal.component';

describe('ValidateCompetenceModalComponent', () => {
  let component: ValidateCompetenceModalComponent;
  let fixture: ComponentFixture<ValidateCompetenceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidateCompetenceModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidateCompetenceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
