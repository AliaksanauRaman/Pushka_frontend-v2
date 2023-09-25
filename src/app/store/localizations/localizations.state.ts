import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

import { LocalizationsStateModel } from './model';
import { LOCALIZATIONS_DEFAULTS } from './defaults';
import { SelectLocalization } from './localizations.actions';

type StateModel = LocalizationsStateModel;

@State<StateModel>({
  name: 'localizations',
  defaults: LOCALIZATIONS_DEFAULTS,
})
@Injectable({
  providedIn: 'root',
})
export class LocalizationsState {
  @Action(SelectLocalization)
  public selectLocalization(
    context: StateContext<StateModel>,
    action: SelectLocalization
  ): void {
    context.patchState({ selected: action.localization });
  }
}
