import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramingsListComponent } from './programings-list.component';

describe('ProgramingsListComponent', () => {
  let component: ProgramingsListComponent;
  let fixture: ComponentFixture<ProgramingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramingsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
