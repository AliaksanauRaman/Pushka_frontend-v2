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
import { HelpRequestsHttpService } from '@shared/http/help-requests/help-requests-http.service';
import { FilterByPlaceQueryService } from '@shared/services/filter-by-place-query/filter-by-place-query.service';

import { PageableData } from '@shared/types/pageable-data';
import { HelpRequest } from '@shared/types/help-request';
import { BaseStateService } from '@shared/base/base-state.service';

type GetPublishedHelpRequestsState = Readonly<{
  isLoading: boolean;
  noFilters: boolean;
  responseData: PageableData<HelpRequest> | null;
  responseErrorMessage: string;
}>;

@Injectable()
export class RequestsPageService extends BaseStateService<GetPublishedHelpRequestsState> {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _placesService = inject(PlacesService);
  private readonly _helpRequestsHttpService = inject(
    HelpRequestsHttpService
  );
  private readonly _filterByPlaceQueryService = inject(
    FilterByPlaceQueryService
  );

  public fetchPublishedHelpRequests(): void {
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

          return this._helpRequestsHttpService.getPublished(filter).pipe(
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
                  'backendError.unknownGetPublishedHelpRequestsError',
              });
              return throwError(() => error);
            })
          );
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }

  protected override getInitialState(): GetPublishedHelpRequestsState {
    return {
      isLoading: false,
      noFilters: true,
      responseData: null,
      responseErrorMessage: '',
    };
  }
}
