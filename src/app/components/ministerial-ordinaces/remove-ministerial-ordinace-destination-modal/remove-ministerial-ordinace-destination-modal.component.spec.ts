import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveMinisterialOrdinaceDestinationModalComponent } from './remove-ministerial-ordinace-destination-modal.component';

describe('RemoveMinisterialOrdinaceDestinationModalComponent', () => {
  let component: RemoveMinisterialOrdinaceDestinationModalComponent;
  let fixture: ComponentFixture<RemoveMinisterialOrdinaceDestinationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveMinisterialOrdinaceDestinationModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveMinisterialOrdinaceDestinationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
