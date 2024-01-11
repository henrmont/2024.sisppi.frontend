import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPermissionModalComponent } from './users-permission-modal.component';

describe('UsersPermissionModalComponent', () => {
  let component: UsersPermissionModalComponent;
  let fixture: ComponentFixture<UsersPermissionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersPermissionModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersPermissionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
