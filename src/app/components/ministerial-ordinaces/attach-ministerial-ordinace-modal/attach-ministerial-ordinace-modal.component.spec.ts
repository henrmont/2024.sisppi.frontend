import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachMinisterialOrdinaceModalComponent } from './attach-ministerial-ordinace-modal.component';

describe('AttachMinisterialOrdinaceModalComponent', () => {
  let component: AttachMinisterialOrdinaceModalComponent;
  let fixture: ComponentFixture<AttachMinisterialOrdinaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttachMinisterialOrdinaceModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttachMinisterialOrdinaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
