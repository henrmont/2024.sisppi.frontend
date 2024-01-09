import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountiesPageComponent } from './counties-page.component';

describe('CountiesPageComponent', () => {
  let component: CountiesPageComponent;
  let fixture: ComponentFixture<CountiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountiesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
