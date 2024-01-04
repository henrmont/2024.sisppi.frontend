import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleUserModalComponent } from './role-user-modal.component';

describe('RoleUserModalComponent', () => {
  let component: RoleUserModalComponent;
  let fixture: ComponentFixture<RoleUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleUserModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoleUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
