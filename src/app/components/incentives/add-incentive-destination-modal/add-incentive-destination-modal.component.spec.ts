import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIncentiveDestinationModalComponent } from './add-incentive-destination-modal.component';

describe('AddIncentiveDestinationModalComponent', () => {
  let component: AddIncentiveDestinationModalComponent;
  let fixture: ComponentFixture<AddIncentiveDestinationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddIncentiveDestinationModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddIncentiveDestinationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
