import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadProcedureModalComponent } from './read-procedure-modal.component';

describe('ReadProcedureModalComponent', () => {
  let component: ReadProcedureModalComponent;
  let fixture: ComponentFixture<ReadProcedureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadProcedureModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadProcedureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
