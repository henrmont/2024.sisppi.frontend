import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterialOrdinaceDestinationModalComponent } from './ministerial-ordinace-destination-modal.component';

describe('MinisterialOrdinaceDestinationModalComponent', () => {
  let component: MinisterialOrdinaceDestinationModalComponent;
  let fixture: ComponentFixture<MinisterialOrdinaceDestinationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinisterialOrdinaceDestinationModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinisterialOrdinaceDestinationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
