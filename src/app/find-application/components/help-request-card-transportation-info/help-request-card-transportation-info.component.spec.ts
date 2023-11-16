import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpRequestCardTransportationInfoComponent } from './help-request-card-transportation-info.component';

describe('HelpRequestCardTransportationInfoComponent', () => {
  let component: HelpRequestCardTransportationInfoComponent;
  let fixture: ComponentFixture<HelpRequestCardTransportationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpRequestCardTransportationInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpRequestCardTransportationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
