import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRoleModalComponent } from './users-role-modal.component';

describe('UsersRoleModalComponent', () => {
  let component: UsersRoleModalComponent;
  let fixture: ComponentFixture<UsersRoleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersRoleModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersRoleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
