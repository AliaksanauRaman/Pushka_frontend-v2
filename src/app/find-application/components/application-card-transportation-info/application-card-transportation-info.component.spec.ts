import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationCardTransportationInfoComponent } from './application-card-transportation-info.component';

describe('ApplicationCardTransportationInfoComponent', () => {
  let component: ApplicationCardTransportationInfoComponent;
  let fixture: ComponentFixture<ApplicationCardTransportationInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApplicationCardTransportationInfoComponent]
    });
    fixture = TestBed.createComponent(ApplicationCardTransportationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
