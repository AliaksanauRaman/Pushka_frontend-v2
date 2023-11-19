import { TestBed } from '@angular/core/testing';

import { FilterByPlaceQueryService } from './filter-by-place-query.service';

describe('FilterByPlaceQueryService', () => {
  let service: FilterByPlaceQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterByPlaceQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
