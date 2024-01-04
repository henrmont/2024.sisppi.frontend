import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetAccountPageComponent } from './reset-account-page.component';

describe('ResetAccountPageComponent', () => {
  let component: ResetAccountPageComponent;
  let fixture: ComponentFixture<ResetAccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetAccountPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
