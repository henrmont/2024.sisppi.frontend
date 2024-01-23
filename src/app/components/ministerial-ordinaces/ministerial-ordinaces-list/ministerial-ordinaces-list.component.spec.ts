import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterialOrdinacesListComponent } from './ministerial-ordinaces-list.component';

describe('MinisterialOrdinacesListComponent', () => {
  let component: MinisterialOrdinacesListComponent;
  let fixture: ComponentFixture<MinisterialOrdinacesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinisterialOrdinacesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinisterialOrdinacesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
