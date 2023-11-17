import { DestroyRef, Injectable, Signal, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { catchError, combineLatest, tap, throwError } from 'rxjs';

import { FilterByPlaceQueryService } from '../../services/filter-by-place-query/filter-by-place-query.service';
import { PlacesService } from '@shared/services/places/places.service';
import { DeliveryOffersHttpService } from '@shared/http/delivery-offers/delivery-offers-http.service';

import { BaseStateService } from '@shared/base/base-state.service';
import { DeliveryOffersList } from '@shared/types/delivery-offer';
import { FilterByPlaceValue } from '@shared/types/filter-by-place-value';

type OffersPageState = {
  isLoading: boolean;
  deliveryOffersList: DeliveryOffersList | null;
  requestErrorMessage: string;
};

@Injectable()
export class OffersPageService extends BaseStateService<OffersPageState> {
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _filterByPlaceQueryService = inject(
    FilterByPlaceQueryService
  );
  private readonly _placesService = inject(PlacesService);
  private readonly _deliveryOffersHttpService = inject(
    DeliveryOffersHttpService
  );

  private readonly _filterByPlaceValue = signal(
    new FilterByPlaceValue(null, null)
  );

  public get filterByPlaceValue(): Signal<FilterByPlaceValue> {
    return this._filterByPlaceValue.asReadonly();
  }

  constructor() {
    super();
    this.subToPageQueryChanges();
  }

  public fetchPublishedDeliveryOffers(
    filterValue = this._filterByPlaceValue()
  ): void {
    this.updateState({
      isLoading: true,
      deliveryOffersList: null,
      requestErrorMessage: '',
    });

    this._deliveryOffersHttpService
      .getPublished(filterValue)
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

  public handleFilterByPlaceChange(value: FilterByPlaceValue): void {
    this._filterByPlaceQueryService.updateQuery(this._activatedRoute, value);
  }

  public handleClearFilterByPlace(): void {
    this._filterByPlaceQueryService.clearQuery(this._activatedRoute);
  }

  protected getInitialState(): OffersPageState {
    return {
      isLoading: false,
      deliveryOffersList: null,
      requestErrorMessage: '',
    };
  }

  private subToPageQueryChanges(): void {
    combineLatest([
      this._activatedRoute.queryParams,
      this._placesService.translatedPlaces$,
    ])
      .pipe(
        tap(([query, translatedPlaces]) =>
          this._filterByPlaceValue.set(
            this._filterByPlaceQueryService.getValueFromQuery(
              query,
              translatedPlaces
            )
          )
        ),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }
}
