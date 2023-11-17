import { TestBed } from '@angular/core/testing';

import { UserEntryDialogHelperService } from './user-entry-dialog-helper.service';

describe('UserEntryDialogHelperService', () => {
  let service: UserEntryDialogHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserEntryDialogHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
