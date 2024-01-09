import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCountyModalComponent } from './read-county-modal.component';

describe('ReadCountyModalComponent', () => {
  let component: ReadCountyModalComponent;
  let fixture: ComponentFixture<ReadCountyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadCountyModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadCountyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
