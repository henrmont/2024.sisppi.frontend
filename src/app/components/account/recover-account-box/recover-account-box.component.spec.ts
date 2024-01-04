import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverAccountBoxComponent } from './recover-account-box.component';

describe('RecoverAccountBoxComponent', () => {
  let component: RecoverAccountBoxComponent;
  let fixture: ComponentFixture<RecoverAccountBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoverAccountBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecoverAccountBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
