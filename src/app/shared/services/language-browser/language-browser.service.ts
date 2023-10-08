import { Injectable } from '@angular/core';

import { BaseBrowserService } from '@shared/base/base-browser.service';
import { Language } from '@shared/enums/language.enum';
import { determineLanguageBasedOnBrowserLanguage } from '@shared/utils/determine-language-based-on-browser-language';

@Injectable({
  providedIn: 'root',
})
export class LanguageBrowserService extends BaseBrowserService<Language | null> {
  public get(): Language | null {
    return determineLanguageBasedOnBrowserLanguage(this._navigator.language);
  }
}
