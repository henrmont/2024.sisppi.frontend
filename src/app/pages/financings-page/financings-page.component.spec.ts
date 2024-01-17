import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancingsPageComponent } from './financings-page.component';

describe('FinancingsPageComponent', () => {
  let component: FinancingsPageComponent;
  let fixture: ComponentFixture<FinancingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancingsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
