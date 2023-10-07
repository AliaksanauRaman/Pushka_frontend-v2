import { Injectable, inject } from '@angular/core';
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';

import { LOCAL_STORAGE } from '@global/local-storage';
import { NAVIGATOR } from '@global/navigator';
import { LOCALIZATIONS } from '@shared/dependencies/localizations';

import {
  InitSelectedLocalization,
  SelectLocalization,
} from './localizations.actions';
import { Localization } from '@shared/types/localization';
import { Language, checkIsLanguage } from '@shared/enums/language.enum';
import { LocalStorageKey } from '@shared/enums/local-storage-key.enum';

type StateModel = Localization | null;

@State<StateModel>({
  name: 'localizations',
  defaults: null,
})
@Injectable({
  providedIn: 'root',
})
export class LocalizationsState implements NgxsOnInit {
  private readonly _localStorage = inject(LOCAL_STORAGE);
  private readonly _navigator = inject(NAVIGATOR);
  private readonly _localizations = inject(LOCALIZATIONS);

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
    action: InitSelectedLocalization
  ): void {
    context.setState(action.localization);
  }

  @Action(SelectLocalization)
  public selectLocalization(
    context: StateContext<StateModel>,
    action: SelectLocalization
  ): void {
    context.setState(action.localization);
    this._localStorage.setItem(
      LocalStorageKey.LANGUAGE,
      action.localization.language
    );
  }

  private getLanguageFromPreviousSession(): Language | null {
    const language = this._localStorage.getItem(LocalStorageKey.LANGUAGE);

    if (language === null || !checkIsLanguage(language)) {
      return null;
    }

    return language;
  }

  private getLanguageFromBrowserSettings(): Language | null {
    const { language } = this._navigator;

    if (['be', 'be-BY'].includes(language)) {
      return Language.BELARUSIAN;
    }

    if (['en', 'en-GB', 'en-US'].includes(language)) {
      return Language.ENGLISH;
    }

    if (['ru', 'ru-RU'].includes(language)) {
      return Language.RUSSIAN;
    }

    return null;
  }
}
