import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgroupsListComponent } from './subgroups-list.component';

describe('SubgroupsListComponent', () => {
  let component: SubgroupsListComponent;
  let fixture: ComponentFixture<SubgroupsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubgroupsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubgroupsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
