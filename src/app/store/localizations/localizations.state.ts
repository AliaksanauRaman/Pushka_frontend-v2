import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { LocalizationsStateModel } from './model';
import { LOCALIZATIONS_DEFAULTS } from './defaults';
import { SelectLocalization } from './localizations.actions';
import { Localization } from '@shared/types/localization';

type StateModel = LocalizationsStateModel;

@State<StateModel>({
  name: 'localizations',
  defaults: LOCALIZATIONS_DEFAULTS,
})
@Injectable({
  providedIn: 'root',
})
export class LocalizationsState {
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
  }
}
