import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationFormsListComponent } from './organization-forms-list.component';

describe('OrganizationFormsListComponent', () => {
  let component: OrganizationFormsListComponent;
  let fixture: ComponentFixture<OrganizationFormsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationFormsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationFormsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
