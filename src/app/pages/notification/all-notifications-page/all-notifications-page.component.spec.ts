import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNotificationsPageComponent } from './all-notifications-page.component';

describe('AllNotificationsPageComponent', () => {
  let component: AllNotificationsPageComponent;
  let fixture: ComponentFixture<AllNotificationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllNotificationsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllNotificationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
