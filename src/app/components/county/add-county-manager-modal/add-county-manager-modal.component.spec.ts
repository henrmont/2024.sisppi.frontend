import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountyManagerModalComponent } from './add-county-manager-modal.component';

describe('AddCountyManagerModalComponent', () => {
  let component: AddCountyManagerModalComponent;
  let fixture: ComponentFixture<AddCountyManagerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCountyManagerModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCountyManagerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
