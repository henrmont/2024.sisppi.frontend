import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeImageProfileModalComponent } from './change-image-profile-modal.component';

describe('ChangeImageProfileModalComponent', () => {
  let component: ChangeImageProfileModalComponent;
  let fixture: ComponentFixture<ChangeImageProfileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeImageProfileModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeImageProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
