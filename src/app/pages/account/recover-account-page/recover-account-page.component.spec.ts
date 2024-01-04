import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverAccountPageComponent } from './recover-account-page.component';

describe('RecoverAccountPageComponent', () => {
  let component: RecoverAccountPageComponent;
  let fixture: ComponentFixture<RecoverAccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoverAccountPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
