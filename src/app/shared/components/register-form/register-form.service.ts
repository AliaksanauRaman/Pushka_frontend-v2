import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, tap, throwError } from 'rxjs';

import { RegisterErrorMessageFactory } from './register-error-message.factory';
import { UsersHttpService } from '@shared/http/users/users-http.service';
import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';

import { BaseStateService } from '@shared/base/base-state.service';
import { ValidRegisterFormValue } from '@shared/types/valid-register-form-value';
import { RegisterResponseData } from '@shared/types/register-response-data';

type RegisterFormState = Readonly<{
  isLoading: boolean;
  responseData: RegisterResponseData | null;
}>;

@Injectable()
export class RegisterFormService extends BaseStateService<RegisterFormState> {
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _usersHttpService = inject(UsersHttpService);
  private readonly _snackBarService = inject(SnackBarService);
  private readonly _registerErrorMessageFactory = inject(
    RegisterErrorMessageFactory
  );

  public handleValidRegisterFormSubmit(
    validFormValue: ValidRegisterFormValue
  ): void {
    this.updateState({
      isLoading: true,
      responseData: null,
    });

    this._usersHttpService
      .register(validFormValue.toRegisterDto())
      .pipe(
        tap((responseData) =>
          this.updateState({
            isLoading: false,
            responseData,
          })
        ),
        catchError((error: unknown) => {
          this.updateState({
            isLoading: false,
            responseData: null,
          });
          this._snackBarService.showErrorMessage(
            this._registerErrorMessageFactory.build(error)
          );
          return throwError(() => error);
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }

  protected getInitialState(): RegisterFormState {
    return {
      isLoading: false,
      responseData: null,
    };
  }
}
