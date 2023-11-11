import { TestBed } from '@angular/core/testing';

import { DialogTabsService } from './dialog-tabs.service';

describe('DialogTabsService', () => {
  let service: DialogTabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogTabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
