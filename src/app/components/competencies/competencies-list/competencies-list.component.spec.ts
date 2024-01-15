import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciesListComponent } from './competencies-list.component';

describe('CompetenciesListComponent', () => {
  let component: CompetenciesListComponent;
  let fixture: ComponentFixture<CompetenciesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetenciesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetenciesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
