import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentiveDestinationModalComponent } from './incentive-destination-modal.component';

describe('IncentiveDestinationModalComponent', () => {
  let component: IncentiveDestinationModalComponent;
  let fixture: ComponentFixture<IncentiveDestinationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncentiveDestinationModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncentiveDestinationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
