import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserRoleModalComponent } from './add-user-role-modal.component';

describe('AddUserRoleModalComponent', () => {
  let component: AddUserRoleModalComponent;
  let fixture: ComponentFixture<AddUserRoleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUserRoleModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddUserRoleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
