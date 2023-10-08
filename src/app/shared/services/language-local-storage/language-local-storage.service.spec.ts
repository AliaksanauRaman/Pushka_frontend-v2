import { TestBed } from '@angular/core/testing';

import { LanguageLocalStorageService } from './language-local-storage.service';

describe('LanguageLocalStorageService', () => {
  let service: LanguageLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
