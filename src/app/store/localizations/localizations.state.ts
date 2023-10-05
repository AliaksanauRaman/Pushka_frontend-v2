import { Injectable, inject } from '@angular/core';
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';

import { LOCAL_STORAGE } from '@global/local-storage';
import { NAVIGATOR } from '@global/navigator';

import {
  InitSelectedLocalization,
  SelectLocalization,
} from './localizations.actions';
import { Localization } from '@shared/types/localization';
import { Language, checkIsLanguage } from '@shared/enums/language.enum';
import { Locale } from '@shared/enums/locale.enum';
import { LocalStorageKey } from '@shared/enums/local-storage-key.enum';

type StateModel = Readonly<{
  localizations: ReadonlyArray<Localization>;
  selected: Localization | null;
}>;

const LOCALIZATIONS = [
  new Localization('BY', Language.BELARUSIAN, Locale.BY),
  new Localization('EN', Language.ENGLISH, Locale.EN),
  new Localization('RU', Language.RUSSIAN, Locale.RU),
];

@State<StateModel>({
  name: 'localizations',
  defaults: {
    localizations: LOCALIZATIONS,
    selected: null,
  },
})
@Injectable({
  providedIn: 'root',
})
export class LocalizationsState implements NgxsOnInit {
  private readonly _localStorage = inject(LOCAL_STORAGE);
  private readonly _navigator = inject(NAVIGATOR);

  @Selector()
  public static localizations(state: StateModel): ReadonlyArray<Localization> {
    return state.localizations;
  }

  @Selector()
  public static selected(state: StateModel): Localization {
    if (state.selected === null) {
      throw new Error('There is always must be a selected localization!');
    }

    return state.selected;
  }

  public ngxsOnInit(context: StateContext<StateModel>): void {
    const initialLanguage =
      this.getLanguageFromPreviousSession() ||
      this.getLanguageFromBrowserSettings() ||
      Language.BELARUSIAN;

    const initialLocalization = context
      .getState()
      .localizations.find(
        (localization) => localization.language === initialLanguage
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
    context.patchState({ selected: action.localization });
  }

  @Action(SelectLocalization)
  public selectLocalization(
    context: StateContext<StateModel>,
    action: SelectLocalization
  ): void {
    context.patchState({ selected: action.localization });
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
