import { InjectionToken } from '@angular/core';

export const DIALOG_CONFIG = new InjectionToken('DIALOG_CONFIG', {
  providedIn: 'root',
  factory: () => ({
    baseClass: 'pu-dialog',
    smallClass: 'pu-dialog--small',
    scrollableClass: 'pu-dialog--scrollable',
  }),
});
