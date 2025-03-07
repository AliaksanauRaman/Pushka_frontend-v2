import { InjectionToken } from '@angular/core';

export const SNACK_BAR_CONFIG = new InjectionToken(
  'SNACK_BAR_CONFIG',
  {
    providedIn: 'root',
    factory: () => ({
      baseClass: 'pu-snack-bar',
      successClass: 'pu-snack-bar--success',
      errorClass: 'pu-snack-bar--error',
      importantClass: 'pu-snack-bar--important',
      laptopClass: 'pu-snack-bar--laptop',
      successDuration: 4000,
      errorDuration: 6000,
    }),
  }
);
