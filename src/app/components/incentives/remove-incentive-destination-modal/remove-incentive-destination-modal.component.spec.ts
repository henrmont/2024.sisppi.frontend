import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveIncentiveDestinationModalComponent } from './remove-incentive-destination-modal.component';

describe('RemoveIncentiveDestinationModalComponent', () => {
  let component: RemoveIncentiveDestinationModalComponent;
  let fixture: ComponentFixture<RemoveIncentiveDestinationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveIncentiveDestinationModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveIncentiveDestinationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
