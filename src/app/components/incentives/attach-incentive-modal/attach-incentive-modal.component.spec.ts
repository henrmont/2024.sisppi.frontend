import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachIncentiveModalComponent } from './attach-incentive-modal.component';

describe('AttachIncentiveModalComponent', () => {
  let component: AttachIncentiveModalComponent;
  let fixture: ComponentFixture<AttachIncentiveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttachIncentiveModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttachIncentiveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
