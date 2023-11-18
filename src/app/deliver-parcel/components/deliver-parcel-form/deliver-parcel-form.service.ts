import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngxs/store';
import { catchError, tap, throwError } from 'rxjs';

import { ForceLoginDialogHelperService } from '@shared/services/force-login-dialog-helper/force-login-dialog-helper.service';
import { DeliveryOffersHttpService } from '@shared/http/delivery-offers/delivery-offers-http.service';
import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';

import { BaseStateService } from '@shared/base/base-state.service';
import { ValidDeliverParcelFormValue } from '@shared/types/valid-deliver-parcel-form-value';
import { ApplicationStatus } from '@shared/enums/application-status.enum';
import { UserState } from '@store/user';

type DeliverParcelFormState = Readonly<{
  isSuccess: boolean;
  isLoading: boolean;
}>;

@Injectable()
export class DeliverParcelFormService extends BaseStateService<DeliverParcelFormState> {
  private readonly _store = inject(Store);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _forceLoginDialogHelperService = inject(ForceLoginDialogHelperService);
  private readonly _deliveryOffersHttpService = inject(DeliveryOffersHttpService);
  private readonly _snackBarService = inject(SnackBarService);

  public handleValidDeliverParcelFormSubmit(
    validFormValue: ValidDeliverParcelFormValue
  ): void {
    // TODO
    // const currentUser = this._store.selectSnapshot(UserState.stream);

    // if (currentUser === null) {
    //   this._forceLoginDialogHelperService.openDialog({
    //     email: validFormValue.email,
    //     fullName: validFormValue.fullName,
    //   });
    // } else {
    //   alert('logged in');
    // }

    // return;

    this.updateState({
      isSuccess: false,
      isLoading: true,
    });

    this._deliveryOffersHttpService
      .createOne(
        validFormValue.toCreateDeliveryOfferDto(ApplicationStatus.PUBLISHED)
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
            'backendError.unknownDeliverParcelRequestError'
          );
          return throwError(() => error);
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }

  protected getInitialState(): DeliverParcelFormState {
    return {
      isSuccess: false,
      isLoading: false,
    };
  }
}
