import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIncentiveModalComponent } from './update-incentive-modal.component';

describe('UpdateIncentiveModalComponent', () => {
  let component: UpdateIncentiveModalComponent;
  let fixture: ComponentFixture<UpdateIncentiveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateIncentiveModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateIncentiveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
