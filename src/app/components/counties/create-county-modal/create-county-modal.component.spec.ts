import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCountyModalComponent } from './create-county-modal.component';

describe('CreateCountyModalComponent', () => {
  let component: CreateCountyModalComponent;
  let fixture: ComponentFixture<CreateCountyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCountyModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCountyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
