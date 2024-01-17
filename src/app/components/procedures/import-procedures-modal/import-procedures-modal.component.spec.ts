import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportProceduresModalComponent } from './import-procedures-modal.component';

describe('ImportProceduresModalComponent', () => {
  let component: ImportProceduresModalComponent;
  let fixture: ComponentFixture<ImportProceduresModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportProceduresModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportProceduresModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
