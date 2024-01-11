import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesPermissionModalComponent } from './roles-permission-modal.component';

describe('RolesPermissionModalComponent', () => {
  let component: RolesPermissionModalComponent;
  let fixture: ComponentFixture<RolesPermissionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolesPermissionModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RolesPermissionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
