import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeliveryOfferFormComponent } from './create-delivery-offer-form.component';

describe('CreateDeliveryOfferFormComponent', () => {
  let component: CreateDeliveryOfferFormComponent;
  let fixture: ComponentFixture<CreateDeliveryOfferFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateDeliveryOfferFormComponent]
    });
    fixture = TestBed.createComponent(CreateDeliveryOfferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
