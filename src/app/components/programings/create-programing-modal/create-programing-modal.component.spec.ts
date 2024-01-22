import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProgramingModalComponent } from './create-programing-modal.component';

describe('CreateProgramingModalComponent', () => {
  let component: CreateProgramingModalComponent;
  let fixture: ComponentFixture<CreateProgramingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProgramingModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateProgramingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
