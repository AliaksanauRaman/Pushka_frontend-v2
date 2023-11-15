import { TestBed } from '@angular/core/testing';

import { MyApplicationsHttpService } from './my-applications-http.service';

describe('MyApplicationsHttpService', () => {
  let service: MyApplicationsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyApplicationsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
