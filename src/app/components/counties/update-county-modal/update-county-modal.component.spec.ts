import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCountyModalComponent } from './update-county-modal.component';

describe('UpdateCountyModalComponent', () => {
  let component: UpdateCountyModalComponent;
  let fixture: ComponentFixture<UpdateCountyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCountyModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCountyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
