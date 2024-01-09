import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountiesListComponent } from './counties-list.component';

describe('CountiesListComponent', () => {
  let component: CountiesListComponent;
  let fixture: ComponentFixture<CountiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountiesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
