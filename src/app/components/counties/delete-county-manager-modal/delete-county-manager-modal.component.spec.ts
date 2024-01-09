import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCountyManagerModalComponent } from './delete-county-manager-modal.component';

describe('DeleteCountyManagerModalComponent', () => {
  let component: DeleteCountyManagerModalComponent;
  let fixture: ComponentFixture<DeleteCountyManagerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCountyManagerModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCountyManagerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
