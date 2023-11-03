import { InjectionToken } from '@angular/core';

import { CountryCode } from '@shared/types/country-code';

export const COUNTRY_CODES = new InjectionToken<ReadonlyArray<CountryCode>>(
  'COUNTRY_CODES',
  {
    providedIn: 'root',
    factory: () => [
      new CountryCode('+375', 'country.belarus'),
      new CountryCode('+48', 'country.poland'),
      new CountryCode('+38', 'country.ukraine'),
      new CountryCode('+370', 'country.lithuania'),
      new CountryCode('+995', 'country.georgia'),
    ],
  }
);
