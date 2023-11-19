import { DestroyRef, Injectable, Signal, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { catchError, combineLatest, tap, throwError } from 'rxjs';

import { HelpRequestsHttpService } from '@shared/http/help-requests/help-requests-http.service';
import { PlacesService } from '@shared/services/places/places.service';
import { FilterByPlaceQueryService } from '@shared/services/filter-by-place-query/filter-by-place-query.service';

import { BaseStateService } from '@shared/base/base-state.service';
import { Pageable } from '@shared/types/pageable';
import { HelpRequest } from '@shared/types/help-request';
import { FilterByPlaceValue } from '@shared/types/filter-by-place-value';

type RequestsPageState = {
  isLoading: boolean;
  helpRequestsList: Pageable<HelpRequest> | null;
  responseErrorMessage: string;
};

@Injectable()
export class RequestsPageService extends BaseStateService<RequestsPageState> {
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _helpRequestsHttpService = inject(HelpRequestsHttpService);
  private readonly _placesService = inject(PlacesService);
  private readonly _filterByPlaceQueryService = inject(
    FilterByPlaceQueryService
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

  public fetchPublishedHelpRequests(
    filterValue = this._filterByPlaceValue()
  ): void {
    this.updateState({
      isLoading: true,
      helpRequestsList: null,
      responseErrorMessage: '',
    });

    this._helpRequestsHttpService
      .getPublished(filterValue)
      .pipe(
        tap((helpRequestsList) =>
          this.updateState({
            isLoading: false,
            helpRequestsList,
            responseErrorMessage: '',
          })
        ),
        catchError((error: unknown) => {
          this.updateState({
            isLoading: false,
            helpRequestsList: null,
            responseErrorMessage:
              'backendError.unknownHelpRequestsRequestError',
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

  protected getInitialState(): RequestsPageState {
    return {
      isLoading: false,
      helpRequestsList: null,
      responseErrorMessage: '',
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
