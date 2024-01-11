import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserRoleModalComponent } from './delete-user-role-modal.component';

describe('DeleteUserRoleModalComponent', () => {
  let component: DeleteUserRoleModalComponent;
  let fixture: ComponentFixture<DeleteUserRoleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteUserRoleModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteUserRoleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
