import { TestBed } from '@angular/core/testing';

import { DeleteDeliveryOfferService } from './delete-delivery-offer.service';

describe('DeleteDeliveryOfferService', () => {
  let service: DeleteDeliveryOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteDeliveryOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
