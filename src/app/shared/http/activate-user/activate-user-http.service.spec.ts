import { TestBed } from '@angular/core/testing';

import { ActivateUserHttpService } from './activate-user-http.service';

describe('ActivateUserHttpService', () => {
  let service: ActivateUserHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivateUserHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
