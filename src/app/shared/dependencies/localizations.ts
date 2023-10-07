import { InjectionToken } from '@angular/core';

import { Localization } from '@shared/types/localization';
import { Language } from '@shared/enums/language.enum';
import { Locale } from '@shared/enums/locale.enum';

export const LOCALIZATIONS = new InjectionToken<ReadonlyArray<Localization>>(
  'LOCALIZATIONS',
  {
    providedIn: 'root',
    factory: () => [
      new Localization('БЕ', Language.BELARUSIAN, Locale.BY),
      new Localization('EN', Language.ENGLISH, Locale.EN),
      new Localization('РУ', Language.RUSSIAN, Locale.RU),
    ],
  }
);
