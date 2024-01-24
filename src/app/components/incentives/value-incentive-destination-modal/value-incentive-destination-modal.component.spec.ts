import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueIncentiveDestinationModalComponent } from './value-incentive-destination-modal.component';

describe('ValueIncentiveDestinationModalComponent', () => {
  let component: ValueIncentiveDestinationModalComponent;
  let fixture: ComponentFixture<ValueIncentiveDestinationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueIncentiveDestinationModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValueIncentiveDestinationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
