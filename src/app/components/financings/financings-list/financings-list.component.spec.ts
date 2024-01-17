import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancingsListComponent } from './financings-list.component';

describe('FinancingsListComponent', () => {
  let component: FinancingsListComponent;
  let fixture: ComponentFixture<FinancingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancingsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
