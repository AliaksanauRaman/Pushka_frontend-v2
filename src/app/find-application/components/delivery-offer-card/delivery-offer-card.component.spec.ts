import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryOfferCardComponent } from './delivery-offer-card.component';

describe('DeliveryOfferCardComponent', () => {
  let component: DeliveryOfferCardComponent;
  let fixture: ComponentFixture<DeliveryOfferCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryOfferCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveryOfferCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
