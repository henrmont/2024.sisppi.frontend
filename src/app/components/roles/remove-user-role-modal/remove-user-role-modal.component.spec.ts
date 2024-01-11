import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveUserRoleModalComponent } from './remove-user-role-modal.component';

describe('RemoveUserRoleModalComponent', () => {
  let component: RemoveUserRoleModalComponent;
  let fixture: ComponentFixture<RemoveUserRoleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveUserRoleModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveUserRoleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
