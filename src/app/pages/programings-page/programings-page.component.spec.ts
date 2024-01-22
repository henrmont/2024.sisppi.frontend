import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramingsPageComponent } from './programings-page.component';

describe('ProgramingsPageComponent', () => {
  let component: ProgramingsPageComponent;
  let fixture: ComponentFixture<ProgramingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramingsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
