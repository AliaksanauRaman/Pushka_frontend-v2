import { InjectionToken, inject } from '@angular/core';

import { WINDOW } from './window';

export const MATH = new InjectionToken('MATH', {
  providedIn: 'root',
  factory: () => inject(WINDOW).Math,
});
