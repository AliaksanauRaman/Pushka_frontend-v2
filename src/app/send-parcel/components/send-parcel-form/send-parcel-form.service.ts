import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, delay, tap, throwError } from 'rxjs';

import { HelpRequestsHttpService } from '@shared/http/help-requests/help-requests-http.service';
import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';

import { BaseStateService } from '@shared/base/base-state.service';
import { ValidSendParcelFormValue } from '@shared/types/valid-send-parcel-form-value';
import { ApplicationStatus } from '@shared/enums/application-status.enum';

type SendParcelFormState = Readonly<{
  isSuccess: boolean;
  isLoading: boolean;
}>;

@Injectable()
export class SendParcelFormService extends BaseStateService<SendParcelFormState> {
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _helpRequestsHttpService = inject(HelpRequestsHttpService);
  private readonly _snackBarService = inject(SnackBarService);

  public handleValidSendParcelFormSubmit(
    validFormValue: ValidSendParcelFormValue
  ): void {
    this.updateState({
      isSuccess: false,
      isLoading: true,
    });

    this._helpRequestsHttpService
      .createOne(
        validFormValue.toCreateHelpRequestDto(ApplicationStatus.PUBLISHED)
      )
      .pipe(
        delay(100000),
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
