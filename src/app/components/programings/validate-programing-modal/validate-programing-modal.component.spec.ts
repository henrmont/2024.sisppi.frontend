import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateProgramingModalComponent } from './validate-programing-modal.component';

describe('ValidateProgramingModalComponent', () => {
  let component: ValidateProgramingModalComponent;
  let fixture: ComponentFixture<ValidateProgramingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidateProgramingModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidateProgramingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
