import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';

import { BaseSendParcelFlowService } from './base-send-parcel-flow.service';
import { ValidSendParcelFormValue } from '@shared/types/valid-send-parcel-form-value';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedSendParcelFlowService extends BaseSendParcelFlowService {
  public handleValidSendParcelFormSubmit(
    validFormValue: ValidSendParcelFormValue
  ): Observable<unknown> {
    return this._helpRequestsHttpService
      .authorizedCreateOne(validFormValue.toAuthorizedDto())
      .pipe(
        tap(() =>
          this._snackBarService.showSuccessMessage(
            'successApplicationPublishMessage'
          )
        ),
        catchError((error: unknown) => {
          this._snackBarService.showErrorMessage(
            'backendError.unknownCreateHelpRequestError'
          );
          return throwError(() => error);
        })
      );
  }
}
