import { TestBed } from '@angular/core/testing';

import { DeleteApplicationDialogHelperService } from './delete-application-dialog-helper.service';

describe('DeleteApplicationDialogHelperService', () => {
  let service: DeleteApplicationDialogHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteApplicationDialogHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
