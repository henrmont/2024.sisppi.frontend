import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAccountPageComponent } from './login-account-page.component';

describe('LoginAccountPageComponent', () => {
  let component: LoginAccountPageComponent;
  let fixture: ComponentFixture<LoginAccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAccountPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
