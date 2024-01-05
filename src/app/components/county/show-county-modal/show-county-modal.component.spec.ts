import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCountyModalComponent } from './show-county-modal.component';

describe('ShowCountyModalComponent', () => {
  let component: ShowCountyModalComponent;
  let fixture: ComponentFixture<ShowCountyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCountyModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowCountyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
