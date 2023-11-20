import { DestroyRef, Injectable, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, catchError, finalize, throwError } from 'rxjs';

import { DeliveryOffersHttpService } from '@shared/http/delivery-offers/delivery-offers-http.service';
import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';

@Injectable()
export class DeleteDeliveryOfferService {
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _deliveryOffersHttpService = inject(
    DeliveryOffersHttpService
  );
  private readonly _snackBarService = inject(SnackBarService);

  public readonly isDeleting = signal(false);

  public deleteById(id: number): Observable<unknown> {
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
