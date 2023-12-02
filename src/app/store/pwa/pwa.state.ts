import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';

import { PwaService } from '@shared/services/pwa/pwa.service';

import {
  PwaGetLatestVersion,
  PwaIsUnrecoverable,
  PwaNewVersionIsAvailable,
} from './pwa.actions';

type StateModel = Readonly<{
  isEnabled: boolean;
  isAppUpdateAvailable: boolean;
  isAppUnrecoverable: boolean;
}>;

@State<StateModel>({
  name: 'pwa',
  defaults: {
    isEnabled: false,
    isAppUpdateAvailable: false,
    isAppUnrecoverable: false,
  },
})
@Injectable({
  providedIn: 'root',
})
export class PwaState implements NgxsOnInit {
  private readonly _pwaService = inject(PwaService);
  private readonly _document = inject(DOCUMENT);

  @Selector()
  public static isAppUpdateAvailable(state: StateModel): boolean {
    return state.isEnabled && state.isAppUpdateAvailable;
  }

  public ngxsOnInit(context: StateContext<StateModel>): void {
    context.patchState({ isEnabled: this._pwaService.isEnabled });
  }

  @Action(PwaNewVersionIsAvailable)
  public newVersionIsAvailable(context: StateContext<StateModel>): void {
    context.patchState({ isAppUpdateAvailable: true });
  }

  @Action(PwaIsUnrecoverable)
  public isUnrecoverable(context: StateContext<StateModel>): void {
    context.patchState({ isAppUnrecoverable: true });
  }

  @Action(PwaGetLatestVersion)
  public getLatestVersion(_context: StateContext<StateModel>): void {
    this._document.location.reload();
  }
}
