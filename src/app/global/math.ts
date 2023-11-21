import { InjectionToken, inject } from '@angular/core';

import { WINDOW } from './window';

// TODO: Not used
export const MATH = new InjectionToken('MATH', {
  providedIn: 'root',
  factory: () => inject(WINDOW).Math,
});
