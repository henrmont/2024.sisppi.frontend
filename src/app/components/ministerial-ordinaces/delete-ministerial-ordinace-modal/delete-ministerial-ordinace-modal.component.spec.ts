import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMinisterialOrdinaceModalComponent } from './delete-ministerial-ordinace-modal.component';

describe('DeleteMinisterialOrdinaceModalComponent', () => {
  let component: DeleteMinisterialOrdinaceModalComponent;
  let fixture: ComponentFixture<DeleteMinisterialOrdinaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteMinisterialOrdinaceModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteMinisterialOrdinaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
