import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetAccountBoxComponent } from './reset-account-box.component';

describe('ResetAccountBoxComponent', () => {
  let component: ResetAccountBoxComponent;
  let fixture: ComponentFixture<ResetAccountBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetAccountBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetAccountBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
