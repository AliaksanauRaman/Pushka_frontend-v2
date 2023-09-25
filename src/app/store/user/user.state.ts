import { Injectable, inject } from '@angular/core';
import { Action, NgxsOnInit, State, StateContext } from '@ngxs/store';
import { Observable, tap, catchError, throwError } from 'rxjs';

import { AuthenticationHttpService } from '@shared/http/authentication/authentication-http.service';
import { JwtService } from '@shared/services/jwt/jwt.service';
import { LOCAL_STORAGE } from '@global/local-storage';

import { InitUser, LoginUser, LogoutUser } from './user.actions';
import { User } from '@shared/types/user';
import { LoginResponseData } from '@shared/types/login-response-data';
import { LocalStorageKey } from '@shared/enums/local-storage-key.enum';

type StateModel = Readonly<{
  user: User | null;
  loginError: unknown;
}>;

@State<StateModel>({
  name: 'user',
  defaults: {
    user: null,
    loginError: null,
  },
})
@Injectable({
  providedIn: 'root',
})
export class UserState implements NgxsOnInit {
  private readonly _authenticationHttpService = inject(
    AuthenticationHttpService
  );
  private readonly _jwtService = inject(JwtService);
  private readonly _localStorage = inject(LOCAL_STORAGE);

  public ngxsOnInit(context: StateContext<StateModel>): void {
    const token = this.getTokenFromPreviousSession();

    if (token === null) {
      return;
    }

    const user = this._jwtService.decode(token).toUser();
    context.dispatch(new InitUser(user));
  }

  @Action(InitUser)
  public initUser(context: StateContext<StateModel>, action: InitUser): void {
    context.setState({
      user: action.user,
      loginError: null,
    });
  }

  @Action(LoginUser, { cancelUncompleted: true })
  public loginUser(
    context: StateContext<StateModel>,
    action: LoginUser
  ): Observable<LoginResponseData> {
    return this._authenticationHttpService.login(action.loginDto).pipe(
      tap(({ token }) => {
        const user = this._jwtService.decode(token).toUser();

        if (user === null) {
          throw new Error('Invalid token!');
        }

        context.setState({
          user,
          loginError: null,
        });
        this._localStorage.setItem(LocalStorageKey.TOKEN, token);
      }),
      catchError((error: unknown) => {
        context.setState({
          user: null,
          loginError: error,
        });
        return throwError(() => error);
      })
    );
  }

  @Action(LogoutUser)
  public logoutUser(context: StateContext<StateModel>): void {
    context.setState({
      user: null,
      loginError: null,
    });
    this._localStorage.removeItem(LocalStorageKey.TOKEN);
  }

  private getTokenFromPreviousSession(): string | null {
    return this._localStorage.getItem(LocalStorageKey.TOKEN);
  }
}
