import { TestBed } from '@angular/core/testing';

import { HelpRequestsHttpService } from './help-requests-http.service';

describe('HelpRequestsHttpService', () => {
  let service: HelpRequestsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpRequestsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
