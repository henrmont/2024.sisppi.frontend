import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProgramingModalComponent } from './delete-programing-modal.component';

describe('DeleteProgramingModalComponent', () => {
  let component: DeleteProgramingModalComponent;
  let fixture: ComponentFixture<DeleteProgramingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProgramingModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteProgramingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
