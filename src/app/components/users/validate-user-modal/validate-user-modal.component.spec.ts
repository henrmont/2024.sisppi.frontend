import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateUserModalComponent } from './validate-user-modal.component';

describe('ValidateUserModalComponent', () => {
  let component: ValidateUserModalComponent;
  let fixture: ComponentFixture<ValidateUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidateUserModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidateUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
