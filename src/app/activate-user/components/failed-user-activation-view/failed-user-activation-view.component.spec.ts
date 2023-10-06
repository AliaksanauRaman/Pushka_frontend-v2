import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedUserActivationViewComponent } from './failed-user-activation-view.component';

describe('FailedUserActivationViewComponent', () => {
  let component: FailedUserActivationViewComponent;
  let fixture: ComponentFixture<FailedUserActivationViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FailedUserActivationViewComponent]
    });
    fixture = TestBed.createComponent(FailedUserActivationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
