import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadUserModalComponent } from './read-user-modal.component';

describe('ReadUserModalComponent', () => {
  let component: ReadUserModalComponent;
  let fixture: ComponentFixture<ReadUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadUserModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
