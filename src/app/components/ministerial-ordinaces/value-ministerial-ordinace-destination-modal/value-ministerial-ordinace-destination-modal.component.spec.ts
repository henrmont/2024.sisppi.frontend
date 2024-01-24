import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueMinisterialOrdinaceDestinationModalComponent } from './value-ministerial-ordinace-destination-modal.component';

describe('ValueMinisterialOrdinaceDestinationModalComponent', () => {
  let component: ValueMinisterialOrdinaceDestinationModalComponent;
  let fixture: ComponentFixture<ValueMinisterialOrdinaceDestinationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueMinisterialOrdinaceDestinationModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValueMinisterialOrdinaceDestinationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
