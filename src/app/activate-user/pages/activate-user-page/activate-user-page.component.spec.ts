import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateUserPageComponent } from './activate-user-page.component';

describe('ActivateUserPageComponent', () => {
  let component: ActivateUserPageComponent;
  let fixture: ComponentFixture<ActivateUserPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ActivateUserPageComponent]
    });
    fixture = TestBed.createComponent(ActivateUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
