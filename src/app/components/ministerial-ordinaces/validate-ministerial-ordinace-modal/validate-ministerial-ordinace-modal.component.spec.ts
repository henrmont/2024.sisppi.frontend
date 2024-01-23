import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateMinisterialOrdinaceModalComponent } from './validate-ministerial-ordinace-modal.component';

describe('ValidateMinisterialOrdinaceModalComponent', () => {
  let component: ValidateMinisterialOrdinaceModalComponent;
  let fixture: ComponentFixture<ValidateMinisterialOrdinaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidateMinisterialOrdinaceModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidateMinisterialOrdinaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
