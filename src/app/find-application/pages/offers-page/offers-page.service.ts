import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import {
  catchError,
  filter,
  forkJoin,
  switchMap,
  take,
  tap,
  throwError,
} from 'rxjs';

import { PlacesService } from '@shared/services/places/places.service';
import { DeliveryOffersHttpService } from '@shared/http/delivery-offers/delivery-offers-http.service';
import { FilterByPlaceQueryService } from '@shared/services/filter-by-place-query/filter-by-place-query.service';

import { PageableData } from '@shared/types/pageable-data';
import { DeliveryOffer } from '@shared/types/delivery-offer';
import { BaseStateService } from '@shared/base/base-state.service';

type GetPublishedDeliveryOffersState = Readonly<{
  isLoading: boolean;
  noFilters: boolean;
  responseData: PageableData<DeliveryOffer> | null;
  responseErrorMessage: string;
}>;

@Injectable()
export class OffersPageService extends BaseStateService<GetPublishedDeliveryOffersState> {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _placesService = inject(PlacesService);
  private readonly _deliveryOffersHttpService = inject(
    DeliveryOffersHttpService
  );
  private readonly _filterByPlaceQueryService = inject(
    FilterByPlaceQueryService
  );

  public fetchPublishedDeliveryOffers(): void {
    this.updateState({
      isLoading: true,
      noFilters: true,
      responseData: null,
      responseErrorMessage: '',
    });

    forkJoin([
      this._activatedRoute.queryParams.pipe(take(1)),
      this._placesService.translatedPlaces$.pipe(
        filter((translatedPlaces) => translatedPlaces.length > 0),
        take(1)
      ),
    ])
      .pipe(
        switchMap(([query, translatedPlaces]) => {
          const filter = this._filterByPlaceQueryService.getValueFromQuery(
            query,
            translatedPlaces
          );
          const noFilters = filter.isEmpty;

          return this._deliveryOffersHttpService.getPublished(filter).pipe(
            tap((responseData) =>
              this.updateState({
                isLoading: false,
                noFilters,
                responseData,
                responseErrorMessage: '',
              })
            ),
            catchError((error: unknown) => {
              this.updateState({
                isLoading: false,
                noFilters,
                responseData: null,
                responseErrorMessage:
                  'backendError.unknownGetPublishedDeliveryOffersError',
              });
              return throwError(() => error);
            })
          );
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }

  public deleteDeliveryOffer(deliveryOffer: DeliveryOffer): void {
    const currentState = this.getState();

    if (currentState.responseData === null) {
      throw new Error('Response data cannot be null!');
    }

    this.updateState({
      ...currentState,
      responseData: currentState.responseData.deleteItem(deliveryOffer),
    });
  }

  protected override getInitialState(): GetPublishedDeliveryOffersState {
    return {
      isLoading: false,
      noFilters: true,
      responseData: null,
      responseErrorMessage: '',
    };
  }
}
