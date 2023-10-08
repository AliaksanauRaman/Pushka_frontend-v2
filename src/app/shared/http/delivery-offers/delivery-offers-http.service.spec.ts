import { TestBed } from '@angular/core/testing';

import { DeliveryOffersHttpService } from './delivery-offers-http.service';

describe('DeliveryOffersHttpService', () => {
  let service: DeliveryOffersHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryOffersHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
