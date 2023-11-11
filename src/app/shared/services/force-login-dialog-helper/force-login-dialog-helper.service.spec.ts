import { TestBed } from '@angular/core/testing';

import { ForceLoginDialogHelperService } from './force-login-dialog-helper.service';

describe('ForceLoginDialogHelperService', () => {
  let service: ForceLoginDialogHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForceLoginDialogHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
