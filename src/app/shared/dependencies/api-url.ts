import { InjectionToken, inject } from '@angular/core';

import { ENVIRONMENT } from '@global/environment';

export const API_URL = new InjectionToken<string>('API_URL', {
  providedIn: 'root',
  factory: () => inject(ENVIRONMENT).apiUrl,
});
