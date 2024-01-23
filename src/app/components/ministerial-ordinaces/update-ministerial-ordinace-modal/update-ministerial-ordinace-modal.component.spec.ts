import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMinisterialOrdinaceModalComponent } from './update-ministerial-ordinace-modal.component';

describe('UpdateMinisterialOrdinaceModalComponent', () => {
  let component: UpdateMinisterialOrdinaceModalComponent;
  let fixture: ComponentFixture<UpdateMinisterialOrdinaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateMinisterialOrdinaceModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateMinisterialOrdinaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
