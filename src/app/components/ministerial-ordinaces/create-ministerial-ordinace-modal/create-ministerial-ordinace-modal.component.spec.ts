import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMinisterialOrdinaceModalComponent } from './create-ministerial-ordinace-modal.component';

describe('CreateMinisterialOrdinaceModalComponent', () => {
  let component: CreateMinisterialOrdinaceModalComponent;
  let fixture: ComponentFixture<CreateMinisterialOrdinaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMinisterialOrdinaceModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateMinisterialOrdinaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
