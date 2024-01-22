import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProgramingModalComponent } from './update-programing-modal.component';

describe('UpdateProgramingModalComponent', () => {
  let component: UpdateProgramingModalComponent;
  let fixture: ComponentFixture<UpdateProgramingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateProgramingModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateProgramingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
