import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalitiesListComponent } from './modalities-list.component';

describe('ModalitiesListComponent', () => {
  let component: ModalitiesListComponent;
  let fixture: ComponentFixture<ModalitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalitiesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
