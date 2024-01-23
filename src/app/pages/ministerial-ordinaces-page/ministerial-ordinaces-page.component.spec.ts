import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterialOrdinacesPageComponent } from './ministerial-ordinaces-page.component';

describe('MinisterialOrdinacesPageComponent', () => {
  let component: MinisterialOrdinacesPageComponent;
  let fixture: ComponentFixture<MinisterialOrdinacesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinisterialOrdinacesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinisterialOrdinacesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
