import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSettingsPageComponent } from './main-settings-page.component';

describe('MainSettingsPageComponent', () => {
  let component: MainSettingsPageComponent;
  let fixture: ComponentFixture<MainSettingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSettingsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
