import { InjectionToken } from '@angular/core';

export const COUNTRY_CODES = new InjectionToken<ReadonlyArray<string>>(
  'COUNTRY_CODES',
  {
    providedIn: 'root',
    factory: () => [
      '+375', // Belarus
      '+48', // Poland
      '+380', // Ukraine
      '+370', // Lithuania
      '+995', // Georgia
    ],
  }
);
