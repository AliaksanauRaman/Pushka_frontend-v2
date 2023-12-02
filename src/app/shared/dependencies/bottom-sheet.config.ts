import { InjectionToken } from '@angular/core';

export const BOTTOM_SHEET_CONFIG = new InjectionToken('BOTTOM_SHEET_CONFIG', {
  providedIn: 'root',
  factory: () => ({
    baseClass: 'pu-bottom-sheet',
  }),
});
