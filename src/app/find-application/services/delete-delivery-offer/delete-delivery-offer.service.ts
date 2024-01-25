import { Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, catchError, finalize, throwError } from 'rxjs';

import { DeliveryOffersHttpService } from '@shared/http/delivery-offers/delivery-offers-http.service';

import { BaseDeleteApplicationService } from '../../base/base-delete-application/base-delete-application.service';

@Injectable()
export class DeleteDeliveryOfferService extends BaseDeleteApplicationService {
  private readonly _deliveryOffersHttpService = inject(
    DeliveryOffersHttpService
  );

  public override deleteById(id: number): Observable<unknown> {
    this.isDeleting.set(true);

    return this._deliveryOffersHttpService.deleteOne(id).pipe(
      catchError((error: unknown) => {
        this._snackBarService.showErrorMessage(
          'backendError.unknownDeliveryOfferDeletionError'
        );
        return throwError(() => error);
      }),
      finalize(() => this.isDeleting.set(false)),
      takeUntilDestroyed(this._destroyRef)
    );
  }
}
