import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngxs/store';
import { catchError, tap, throwError } from 'rxjs';

import { ForceLoginDialogHelperService } from '@shared/services/force-login-dialog-helper/force-login-dialog-helper.service';
import { HelpRequestsHttpService } from '@shared/http/help-requests/help-requests-http.service';
import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';

import { BaseStateService } from '@shared/base/base-state.service';
import { ValidSendParcelFormValue } from '@shared/types/valid-send-parcel-form-value';
import { ApplicationStatus } from '@shared/enums/application-status.enum';
import { UserState } from '@store/user';

type SendParcelFormState = Readonly<{
  isSuccess: boolean;
  isLoading: boolean;
}>;

@Injectable()
export class SendParcelFormService extends BaseStateService<SendParcelFormState> {
  private readonly _store = inject(Store);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _forceLoginDialogHelperService = inject(ForceLoginDialogHelperService);
  private readonly _helpRequestsHttpService = inject(HelpRequestsHttpService);
  private readonly _snackBarService = inject(SnackBarService);

  public handleValidSendParcelFormSubmit(
    validFormValue: ValidSendParcelFormValue
  ): void {
    // TODO
    const currentUser = this._store.selectSnapshot(UserState.stream);

    if (currentUser === null) {
      this._forceLoginDialogHelperService.openDialog({
        email: validFormValue.email,
        fullName: validFormValue.fullName,
      });
    } else {
      alert('logged in');
    }

    return;

    this.updateState({
      isSuccess: false,
      isLoading: true,
    });

    this._helpRequestsHttpService
      .createOne(
        validFormValue.toCreateHelpRequestDto(ApplicationStatus.PUBLISHED)
      )
      .pipe(
        tap(() =>
          this.updateState({
            isSuccess: true,
            isLoading: false,
          })
        ),
        catchError((error: unknown) => {
          this.updateState({
            isSuccess: false,
            isLoading: false,
          });
          // TODO: More errors
          this._snackBarService.showErrorMessage(
            'backendError.unknownSendParcelRequestError'
          );
          return throwError(() => error);
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }

  protected getInitialState(): SendParcelFormState {
    return {
      isSuccess: false,
      isLoading: false,
    };
  }
}
