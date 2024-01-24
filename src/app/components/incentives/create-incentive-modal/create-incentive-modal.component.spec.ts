import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIncentiveModalComponent } from './create-incentive-modal.component';

describe('CreateIncentiveModalComponent', () => {
  let component: CreateIncentiveModalComponent;
  let fixture: ComponentFixture<CreateIncentiveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateIncentiveModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateIncentiveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
