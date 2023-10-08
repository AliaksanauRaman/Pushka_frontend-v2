import { Injectable } from '@angular/core';

import { BaseLocalStorageService } from '@shared/base/base-local-storage.service';
import { Language } from '@shared/enums/language.enum';
import { LocalStorageKey } from '@shared/enums/local-storage-key.enum';
import { determineLanguageBasedOnOneFromLocalStorage } from '@shared/utils/determine-language-based-on-one-from-local-storage';

@Injectable({
  providedIn: 'root',
})
export class LanguageLocalStorageService extends BaseLocalStorageService<Language> {
  public getKey(): LocalStorageKey {
    return LocalStorageKey.LANGUAGE;
  }

  public get(): Language | null {
    return determineLanguageBasedOnOneFromLocalStorage(
      this._localStorage.getItem(this.getKey())
    );
  }
}
