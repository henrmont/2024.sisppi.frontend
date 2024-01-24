import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentivesPageComponent } from './incentives-page.component';

describe('IncentivesPageComponent', () => {
  let component: IncentivesPageComponent;
  let fixture: ComponentFixture<IncentivesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncentivesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncentivesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
