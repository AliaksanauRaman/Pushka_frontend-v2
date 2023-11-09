import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, tap, throwError } from 'rxjs';

import { UsersHttpService } from '@shared/http/users/users-http.service';
import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';

import { BaseStateService } from '@shared/base/base-state.service';
import { ValidRegisterFormValue } from '@shared/types/valid-register-form-value';

type RegisterFormState = Readonly<{
  isLoading: boolean;
  isSuccess: boolean;
}>;

@Injectable()
export class RegisterFormService extends BaseStateService<RegisterFormState> {
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _usersHttpService = inject(UsersHttpService);
  private readonly _snackBarService = inject(SnackBarService);

  public handleValidRegisterFormSubmit(
    validFormValue: ValidRegisterFormValue
  ): void {
    this.updateState({
      isLoading: true,
      isSuccess: false,
    });

    this._usersHttpService
      .register(validFormValue.toRegisterDto())
      .pipe(
        tap(() =>
          this.updateState({
            isLoading: false,
            isSuccess: true,
          })
        ),
        catchError((error: unknown) => {
          this.updateState({
            isLoading: false,
            isSuccess: false,
          });
          // TODO: More errors
          this._snackBarService.showErrorMessage(
            'backendError.unknownRegisterRequestError'
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
      isSuccess: false,
    };
  }
}
