import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, tap, throwError } from 'rxjs';

import { DeliveryOffersHttpService } from '@shared/http/delivery-offers/delivery-offers-http.service';

import { BaseStateService } from '@shared/base/base-state.service';
import { DeliveryOffersList } from '@shared/types/delivery-offer';

type OffersPageState = {
  isLoading: boolean;
  deliveryOffersList: DeliveryOffersList | null;
  requestErrorMessage: string;
};

@Injectable()
export class OffersPageService extends BaseStateService<OffersPageState> {
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _deliveryOffersHttpService = inject(
    DeliveryOffersHttpService
  );

  public fetchPublishedDeliveryOffers(): void {
    this.updateState({
      isLoading: true,
      deliveryOffersList: null,
      requestErrorMessage: '',
    });

    this._deliveryOffersHttpService
      .getPublished()
      .pipe(
        tap((deliveryOffersList) =>
          this.updateState({
            isLoading: false,
            deliveryOffersList: deliveryOffersList,
            requestErrorMessage: '',
          })
        ),
        catchError((error: unknown) => {
          this.updateState({
            isLoading: false,
            deliveryOffersList: null,
            requestErrorMessage:
              'backendError.unknownDeliveryOffersRequestError',
          });
          return throwError(() => error);
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }

  protected getInitialState(): OffersPageState {
    return {
      isLoading: false,
      deliveryOffersList: null,
      requestErrorMessage: '',
    };
  }
}
