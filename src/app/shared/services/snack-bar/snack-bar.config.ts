import { InjectionToken } from '@angular/core';

type SnackBarConfig = Readonly<{
  baseClass: string;
  successClass: string;
  errorClass: string;
  successDuration: number;
  errorDuration: number;
}>;

export const SNACK_BAR_CONFIG = new InjectionToken<SnackBarConfig>(
  'SNACK_BAR_CONFIG',
  {
    providedIn: 'root',
    factory: () => ({
      baseClass: 'pu-snack-bar',
      successClass: 'pu-snack-bar--success',
      errorClass: 'pu-snack-bar--error',
      successDuration: 3000,
      errorDuration: 5000,
    }),
  }
);
