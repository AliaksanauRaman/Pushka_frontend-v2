import { Injectable, inject } from '@angular/core';
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable, tap } from 'rxjs';

import { LOCALIZATIONS } from '@shared/dependencies/localizations';
import { LanguageLocalStorageService } from '@shared/services/language-local-storage/language-local-storage.service';
import { LanguageBrowserService } from '@shared/services/language-browser/language-browser.service';

import {
  InitSelectedLocalization,
  SelectLocalization,
} from './selected-localization.actions';
import { Localization } from '@shared/types/localization';
import { Language } from '@shared/enums/language.enum';

type StateModel = Localization | null;

@State<StateModel>({
  name: 'selectedLocalization',
  defaults: null,
})
@Injectable({
  providedIn: 'root',
})
export class SelectedLocalizationState implements NgxsOnInit {
  private readonly _localizations = inject(LOCALIZATIONS);
  private readonly _translateService = inject(TranslateService);
  private readonly _languageLocalStorageService = inject(
    LanguageLocalStorageService
  );
  private readonly _languageBrowserService = inject(LanguageBrowserService);

  @Selector()
  public static stream(state: StateModel): Localization {
    if (state === null) {
      throw new Error('There is always must be a selected localization!');
    }

    return state;
  }

  public ngxsOnInit(context: StateContext<StateModel>): void {
    const initialLanguage =
      this.getLanguageFromPreviousSession() ||
      this.getLanguageFromBrowserSettings() ||
      Language.BELARUSIAN;

    const initialLocalization = this._localizations.find(
      ({ language }) => language === initialLanguage
    );

    if (initialLocalization === undefined) {
      throw new Error('The initial localization must be defined!');
    }

    context.dispatch(new InitSelectedLocalization(initialLocalization));
  }

  @Action(InitSelectedLocalization)
  public initSelectedLocalization(
    context: StateContext<StateModel>,
    { localization }: InitSelectedLocalization
  ): Observable<unknown> {
    return this._translateService
      .use(localization.language)
      .pipe(tap(() => context.setState(localization)));
  }

  @Action(SelectLocalization, { cancelUncompleted: true })
  public selectLocalization(
    context: StateContext<StateModel>,
    { localization }: SelectLocalization
  ): Observable<unknown> {
    this._languageLocalStorageService.set(localization.language);

    return this._translateService
      .use(localization.language)
      .pipe(tap(() => context.setState(localization)));
  }

  private getLanguageFromPreviousSession(): Language | null {
    return this._languageLocalStorageService.get();
  }

  private getLanguageFromBrowserSettings(): Language | null {
    return this._languageBrowserService.get();
  }
}
