import { Injectable, inject } from '@angular/core';
import { State, StateContext, Action, NgxsOnInit } from '@ngxs/store';
import { fromEvent, tap } from 'rxjs';

import { WINDOW } from '@global/window';
import { NAVIGATOR } from '@global/navigator';

import { BecomeOffline, BecomeOnline } from './online.actions';

type StateModel = Readonly<{
  isOnline: boolean;
}>;

@State<StateModel>({
  name: 'online',
  defaults: {
    isOnline: false,
  },
})
@Injectable({
  providedIn: 'root',
})
export class OnlineState implements NgxsOnInit {
  private readonly _window = inject(WINDOW);
  private readonly _navigator = inject(NAVIGATOR);

  public ngxsOnInit(context: StateContext<StateModel>): void {
    context.setState({ isOnline: this.checkIsOnline() });

    // We never unsubscribe here as these subscriptions have same lifetime as the app
    fromEvent(this._window, 'online')
      .pipe(tap(() => context.dispatch(new BecomeOnline())))
      .subscribe();

    fromEvent(this._window, 'offline')
      .pipe(tap(() => context.dispatch(new BecomeOffline())))
      .subscribe();
  }

  @Action(BecomeOnline)
  public becomeOnline(context: StateContext<StateModel>): void {
    context.setState({ isOnline: this.checkIsOnline() });
  }

  @Action(BecomeOffline)
  public becomeOffline(context: StateContext<StateModel>): void {
    context.setState({ isOnline: this.checkIsOnline() });
  }

  private checkIsOnline(): boolean {
    return this._navigator.onLine;
  }
}
