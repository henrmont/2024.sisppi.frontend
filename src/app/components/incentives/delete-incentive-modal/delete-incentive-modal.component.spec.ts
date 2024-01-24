import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteIncentiveModalComponent } from './delete-incentive-modal.component';

describe('DeleteIncentiveModalComponent', () => {
  let component: DeleteIncentiveModalComponent;
  let fixture: ComponentFixture<DeleteIncentiveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteIncentiveModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteIncentiveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
