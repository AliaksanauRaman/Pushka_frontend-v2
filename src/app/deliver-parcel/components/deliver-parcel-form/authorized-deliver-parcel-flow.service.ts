import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { BaseDeliverParcelFlowService } from './base-deliver-parcel-flow.service';
import { ValidDeliverParcelFormValue } from '@shared/types/valid-deliver-parcel-form-value';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedDeliverParcelFlowService extends BaseDeliverParcelFlowService {
  public handleValidDeliverParcelFormSubmit(
    validFormValue: ValidDeliverParcelFormValue
  ): Observable<unknown> {
    return this._deliveryOffersHttpService
      .authorizedCreateOne(validFormValue.toAuthorizedDto())
      .pipe(
        tap(() =>
          this._snackBarService.showSuccessMessage(
            'successApplicationCreationMessage'
          )
        )
      );
  }
}
