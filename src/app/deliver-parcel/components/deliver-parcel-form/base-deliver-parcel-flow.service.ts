import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { DeliveryOffersHttpService } from '@shared/http/delivery-offers/delivery-offers-http.service';
import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';

import { ValidDeliverParcelFormValue } from '@shared/types/valid-deliver-parcel-form-value';

@Injectable()
export abstract class BaseDeliverParcelFlowService {
  protected readonly _deliveryOffersHttpService = inject(
    DeliveryOffersHttpService
  );
  protected readonly _snackBarService = inject(SnackBarService);

  public abstract handleValidDeliverParcelFormSubmit(
    validFormValue: ValidDeliverParcelFormValue
  ): Observable<unknown>;
}
