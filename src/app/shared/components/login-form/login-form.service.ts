import { Injectable, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  BehaviorSubject,
  catchError,
  switchMap,
  takeUntil,
  tap,
  throwError,
} from 'rxjs';

import { LoginErrorMessageFactory } from './login-error-message.factory';
import { AuthenticationHttpService } from '@shared/http/authentication/authentication-http.service';
import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';

import { BaseDestroyer } from '@shared/base/base-destroyer';
import { ValidLoginFormValue } from '@shared/types/valid-login-form-value';
import { LoginUser } from '@store/user';

type LoginFormState = Readonly<{
  isSuccess: boolean;
  isLoading: boolean;
}>;

@Injectable()
export class LoginFormService extends BaseDestroyer {
  private readonly _authenticationHttpService = inject(
    AuthenticationHttpService
  );
  private readonly _snackBarService = inject(SnackBarService);
  private readonly _loginErrorMessageFactory = inject(LoginErrorMessageFactory);
  private readonly _store = inject(Store);

  private readonly _state$ = new BehaviorSubject<LoginFormState>({
    isSuccess: false,
    isLoading: false,
  });

  public readonly state$ = this._state$.asObservable();

  public handleValidLoginFormSubmit(validFormValue: ValidLoginFormValue): void {
    this._state$.next({
      isSuccess: false,
      isLoading: true,
    });

    this._authenticationHttpService
      .login(validFormValue.toLoginDto())
      .pipe(
        switchMap(({ token }) => this._store.dispatch(new LoginUser(token))),
        tap(() =>
          this._state$.next({
            isSuccess: true,
            isLoading: false,
          })
        ),
        catchError((errorResponse: unknown) => {
          this._state$.next({
            isSuccess: false,
            isLoading: false,
          });
          this._snackBarService.showErrorMessage(
            this._loginErrorMessageFactory.build(errorResponse)
          );
          return throwError(() => errorResponse);
        }),
        takeUntil(this._destroy$)
      )
      .subscribe();
  }
}
