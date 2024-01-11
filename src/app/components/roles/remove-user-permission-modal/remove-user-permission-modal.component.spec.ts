import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveUserPermissionModalComponent } from './remove-user-permission-modal.component';

describe('RemoveUserPermissionModalComponent', () => {
  let component: RemoveUserPermissionModalComponent;
  let fixture: ComponentFixture<RemoveUserPermissionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveUserPermissionModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveUserPermissionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
