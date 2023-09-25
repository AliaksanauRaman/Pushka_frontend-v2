import { Injectable, inject } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { LOCAL_STORAGE } from '@global/local-storage';

import { LocalizationsStateModel } from './localizations-state.model';
import { LOCALIZATIONS_DEFAULTS } from './localizations.defaults';
import { SelectLocalization } from './localizations.actions';
import { Localization } from '@shared/types/localization';
import { LocalStorageKey } from '@shared/enums/local-storage-key.enum';

type StateModel = LocalizationsStateModel;

@State<StateModel>({
  name: 'localizations',
  defaults: LOCALIZATIONS_DEFAULTS,
})
@Injectable({
  providedIn: 'root',
})
export class LocalizationsState {
  private readonly _localStorage = inject(LOCAL_STORAGE);

  @Selector()
  public static list(state: StateModel): ReadonlyArray<Localization> {
    return state.list;
  }

  @Selector()
  public static selected(state: StateModel): Localization {
    return state.selected;
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
}
