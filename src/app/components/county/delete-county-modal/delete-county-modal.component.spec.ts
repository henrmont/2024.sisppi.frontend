import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCountyModalComponent } from './delete-county-modal.component';

describe('DeleteCountyModalComponent', () => {
  let component: DeleteCountyModalComponent;
  let fixture: ComponentFixture<DeleteCountyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCountyModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCountyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
