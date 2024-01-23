import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCountyManagerModalComponent } from './remove-county-manager-modal.component';

describe('RemoveCountyManagerModalComponent', () => {
  let component: RemoveCountyManagerModalComponent;
  let fixture: ComponentFixture<RemoveCountyManagerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveCountyManagerModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveCountyManagerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
