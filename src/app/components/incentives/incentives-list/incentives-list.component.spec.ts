import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentivesListComponent } from './incentives-list.component';

describe('IncentivesListComponent', () => {
  let component: IncentivesListComponent;
  let fixture: ComponentFixture<IncentivesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncentivesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncentivesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
