import { TestBed } from '@angular/core/testing';

import { HelpOffersHttpService } from './help-offers-http.service';

describe('HelpOffersHttpService', () => {
  let service: HelpOffersHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpOffersHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
