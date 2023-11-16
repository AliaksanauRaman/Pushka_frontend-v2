import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryOfferCardTransportationInfoComponent } from './delivery-offer-card-transportation-info.component';

describe('DeliveryOfferCardTransportationInfoComponent', () => {
  let component: DeliveryOfferCardTransportationInfoComponent;
  let fixture: ComponentFixture<DeliveryOfferCardTransportationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryOfferCardTransportationInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveryOfferCardTransportationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
