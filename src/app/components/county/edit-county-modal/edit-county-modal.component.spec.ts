import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCountyModalComponent } from './edit-county-modal.component';

describe('EditCountyModalComponent', () => {
  let component: EditCountyModalComponent;
  let fixture: ComponentFixture<EditCountyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCountyModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCountyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
