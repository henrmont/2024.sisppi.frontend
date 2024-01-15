import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCompetenceModalComponent } from './delete-competence-modal.component';

describe('DeleteCompetenceModalComponent', () => {
  let component: DeleteCompetenceModalComponent;
  let fixture: ComponentFixture<DeleteCompetenceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCompetenceModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCompetenceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
