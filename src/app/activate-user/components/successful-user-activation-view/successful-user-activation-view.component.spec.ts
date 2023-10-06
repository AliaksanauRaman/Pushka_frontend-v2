import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulUserActivationViewComponent } from './successful-user-activation-view.component';

describe('SuccessfulUserActivationViewComponent', () => {
  let component: SuccessfulUserActivationViewComponent;
  let fixture: ComponentFixture<SuccessfulUserActivationViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SuccessfulUserActivationViewComponent]
    });
    fixture = TestBed.createComponent(SuccessfulUserActivationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
