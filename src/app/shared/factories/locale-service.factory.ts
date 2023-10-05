import { Injectable, Injector, inject } from '@angular/core';

import { BelarusianLocaleService } from '@shared/locales/belarusian-locale.service';
import { RussianLocaleService } from '@shared/locales/russian-locale.service';
import { EnglishLocaleService } from '@shared/locales/english-locale.service';

import { Locale } from '@shared/enums/locale.enum';
import { BaseLocaleService } from '@shared/base/base-locale.service';

@Injectable({
  providedIn: 'root',
})
export class LocaleServiceFactory {
  private readonly _injector = inject(Injector);

  public build(locale: Locale): BaseLocaleService {
    if (locale === Locale.BY) {
      return this._injector.get(BelarusianLocaleService);
    }

    if (locale === Locale.RU) {
      return this._injector.get(RussianLocaleService);
    }

    if (locale === Locale.EN) {
      return this._injector.get(EnglishLocaleService);
    }

    throw new Error(`Unknown locale: '${locale}'!`);
  }
}
