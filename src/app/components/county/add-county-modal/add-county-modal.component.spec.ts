import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountyModalComponent } from './add-county-modal.component';

describe('AddCountyModalComponent', () => {
  let component: AddCountyModalComponent;
  let fixture: ComponentFixture<AddCountyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCountyModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCountyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
