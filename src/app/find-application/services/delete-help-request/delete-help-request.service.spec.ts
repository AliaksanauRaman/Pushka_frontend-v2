import { TestBed } from '@angular/core/testing';

import { DeleteHelpRequestService } from './delete-help-request.service';

describe('DeleteHelpRequestService', () => {
  let service: DeleteHelpRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteHelpRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
