import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountyManagerModalComponent } from './county-manager-modal.component';

describe('CountyManagerModalComponent', () => {
  let component: CountyManagerModalComponent;
  let fixture: ComponentFixture<CountyManagerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountyManagerModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountyManagerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
