import { TestBed } from '@angular/core/testing';

import { LanguageBrowserService } from './language-browser.service';

describe('LanguageBrowserService', () => {
  let service: LanguageBrowserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageBrowserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
