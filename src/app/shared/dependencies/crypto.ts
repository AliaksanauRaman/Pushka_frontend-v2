import { InjectionToken, inject } from '@angular/core';

import { WINDOW } from './window';

export const CRYPTO = new InjectionToken<Crypto>('CRYPTO', {
  providedIn: 'root',
  factory: () => inject(WINDOW).crypto,
});
