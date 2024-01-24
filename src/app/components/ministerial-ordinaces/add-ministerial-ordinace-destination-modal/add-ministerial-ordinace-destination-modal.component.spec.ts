import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMinisterialOrdinaceDestinationModalComponent } from './add-ministerial-ordinace-destination-modal.component';

describe('AddMinisterialOrdinaceDestinationModalComponent', () => {
  let component: AddMinisterialOrdinaceDestinationModalComponent;
  let fixture: ComponentFixture<AddMinisterialOrdinaceDestinationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMinisterialOrdinaceDestinationModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMinisterialOrdinaceDestinationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
