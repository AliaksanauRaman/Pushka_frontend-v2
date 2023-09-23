import { inject } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';

import { API_URL } from '@shared/dependencies/api-url';

import { IS_AUTHORIZED } from '@shared/contexts/is-authorized';

export abstract class BaseHttpService {
  protected readonly _apiUrl = inject(API_URL);
  protected readonly _httpClient = inject(HttpClient);

  protected get authorizedContext(): HttpContext {
    return new HttpContext().set(IS_AUTHORIZED, true);
  }
}
