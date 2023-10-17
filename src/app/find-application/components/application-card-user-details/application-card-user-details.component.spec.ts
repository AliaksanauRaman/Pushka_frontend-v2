import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationCardUserDetailsComponent } from './application-card-user-details.component';

describe('ApplicationCardUserDetailsComponent', () => {
  let component: ApplicationCardUserDetailsComponent;
  let fixture: ComponentFixture<ApplicationCardUserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApplicationCardUserDetailsComponent]
    });
    fixture = TestBed.createComponent(ApplicationCardUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
