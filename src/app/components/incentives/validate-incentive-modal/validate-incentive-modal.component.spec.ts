import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateIncentiveModalComponent } from './validate-incentive-modal.component';

describe('ValidateIncentiveModalComponent', () => {
  let component: ValidateIncentiveModalComponent;
  let fixture: ComponentFixture<ValidateIncentiveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidateIncentiveModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidateIncentiveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
