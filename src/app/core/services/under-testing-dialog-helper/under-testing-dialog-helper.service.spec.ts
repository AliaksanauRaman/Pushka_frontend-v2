import { TestBed } from '@angular/core/testing';

import { UnderTestingDialogHelperService } from './under-testing-dialog-helper.service';

describe('UnderTestingDialogHelperService', () => {
  let service: UnderTestingDialogHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnderTestingDialogHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
