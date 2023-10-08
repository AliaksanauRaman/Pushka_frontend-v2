import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { determineLanguageBasedOnBrowserLanguage } from '@shared/utils/determine-language-based-on-browser-language';
import { determineLanguageBasedOnOneFromLocalStorage } from '@shared/utils/determine-language-based-on-one-from-local-storage';
import { LocalStorageKey } from '@shared/enums/local-storage-key.enum';
import { Language } from '@shared/enums/language.enum';

export const CoreTranslateModule = TranslateModule.forRoot({
  defaultLanguage:
    determineLanguageBasedOnBrowserLanguage(window.navigator.language) ||
    determineLanguageBasedOnOneFromLocalStorage(
      window.localStorage.getItem(LocalStorageKey.LANGUAGE)
    ) ||
    Language.BELARUSIAN,
  loader: {
    provide: TranslateLoader,
    useFactory: translateLoaderFactory,
    deps: [HttpClient],
  },
});

function translateLoaderFactory(httpClient: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(httpClient, '/assets/i18n/', '.json');
}
