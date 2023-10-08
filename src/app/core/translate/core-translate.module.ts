import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { Language } from '@shared/enums/language.enum';

export const CoreTranslateModule = TranslateModule.forRoot({
  defaultLanguage: Language.BELARUSIAN,
  useDefaultLang: true,
  loader: {
    provide: TranslateLoader,
    useFactory: translateLoaderFactory,
    deps: [HttpClient],
  },
});

function translateLoaderFactory(httpClient: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}
