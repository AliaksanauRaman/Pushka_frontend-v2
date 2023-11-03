import { Injectable, inject } from '@angular/core';
import { State, Selector, Action, NgxsOnInit, StateContext } from '@ngxs/store';

import { LOCAL_STORAGE } from '@global/local-storage';
import { JwtService } from '@shared/services/jwt/jwt.service';

import { LoginUser, LogoutUser } from './user.actions';
import { User } from '@shared/types/user';
import { LocalStorageKey } from '@shared/enums/local-storage-key.enum';

type StateModel = User | null;

@State<StateModel>({
  name: 'user',
  defaults: null,
})
@Injectable({
  providedIn: 'root',
})
export class UserState implements NgxsOnInit {
  private readonly _localStorage = inject(LOCAL_STORAGE);
  private readonly _jwtService = inject(JwtService);

  public ngxsOnInit(context: StateContext<StateModel>): void {
    const token = this._localStorage.getItem(LocalStorageKey.TOKEN);

    if (token === null) {
      return;
    }

    const user = this._jwtService.decode(token).toUser();

    if (user === null) {
      // token has expired
    }

    context.setState(user);
  }

  @Selector()
  public static stream(state: StateModel): StateModel {
    return state;
  }

  @Action(LoginUser)
  public loginUser(
    context: StateContext<StateModel>,
    { token }: LoginUser
  ): void {
    this._localStorage.setItem(LocalStorageKey.TOKEN, token);
    const user = this._jwtService.decode(token).toUser();
    context.setState(user);
  }

  @Action(LogoutUser)
  public logoutUser(context: StateContext<StateModel>): void {
    this._localStorage.removeItem(LocalStorageKey.TOKEN);
    context.setState(null);
  }
}
