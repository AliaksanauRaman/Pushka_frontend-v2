import { Injectable, inject } from '@angular/core';
import { Observable, filter, switchMap, tap, throwError } from 'rxjs';

import { ForceLoginDialogHelperService } from '@shared/services/force-login-dialog-helper/force-login-dialog-helper.service';

import { BaseSendParcelFlowService } from './base-send-parcel-flow.service';
import { ValidSendParcelFormValue } from '@shared/types/valid-send-parcel-form-value';

@Injectable({
  providedIn: 'root',
})
export class UnauthorizedSendParcelFlowService extends BaseSendParcelFlowService {
  private readonly _forceLoginDialogHelperService = inject(
    ForceLoginDialogHelperService
  );

  public handleValidSendParcelFormSubmit(
    validFormValue: ValidSendParcelFormValue
  ): Observable<unknown> {
    return this._forceLoginDialogHelperService
      .openDialog({
        email: validFormValue.email,
        fullName: validFormValue.fullName,
      })
      .pipe(
        filter((result) => result !== undefined),
        switchMap((result) => {
          if (result!.type === 'success-login') {
            return this._helpRequestsHttpService
              .authorizedCreateOne(validFormValue.toAuthorizedDto())
              .pipe(
                tap(() =>
                  this._snackBarService.showSuccessMessage(
                    'successLoginAndApplicationCreationMessage'
                  )
                )
              );
          }

          if (result!.type === 'success-register') {
            return this._helpRequestsHttpService
              .unauthorizedCreateOne(
                validFormValue.toUnauthorizedDto(result!.data.userId)
              )
              .pipe(
                tap(() =>
                  this._snackBarService.showImportantMessage(
                    'successRegisterAndApplicationCreationMessage'
                  )
                )
              );
          }

          return throwError(
            () => new Error('Unknown force login dialog result!')
          );
        })
      );
  }
}
