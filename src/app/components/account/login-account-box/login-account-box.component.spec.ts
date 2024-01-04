import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAccountBoxComponent } from './login-account-box.component';

describe('LoginAccountBoxComponent', () => {
  let component: LoginAccountBoxComponent;
  let fixture: ComponentFixture<LoginAccountBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAccountBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginAccountBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
