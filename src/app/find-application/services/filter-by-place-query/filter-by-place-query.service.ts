import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TranslatedPlace } from '@shared/types/translated-place';
import { FilterByPlaceValue } from '@shared/types/filter-by-place-value';

enum ParamName {
  DEPARTURE_PLACE = 'departurePlace',
  DESTINATION = 'destination',
}

@Injectable({
  providedIn: 'root',
})
export class FilterByPlaceQueryService {
  private readonly _router = inject(Router);

  public getValueFromQuery(
    query: Params,
    places: ReadonlyArray<TranslatedPlace>
  ): FilterByPlaceValue {
    const departurePlaceId = Number(query[ParamName.DEPARTURE_PLACE]);
    const departurePlace = Number.isNaN(departurePlaceId)
      ? null
      : places.find((place) => place.id === departurePlaceId);

    const destinationId = Number(query[ParamName.DESTINATION]);
    const destination = Number.isNaN(destinationId)
      ? null
      : places.find((place) => place.id === destinationId);

    return new FilterByPlaceValue(departurePlace || null, destination || null);
  }

  public updateQuery(
    activatedRoute: ActivatedRoute,
    value: FilterByPlaceValue
  ): void {
    this._router.navigate([], {
      relativeTo: activatedRoute,
      queryParams: {
        [ParamName.DEPARTURE_PLACE]: value.departurePlace?.id,
        [ParamName.DESTINATION]: value.destination?.id,
      },
      queryParamsHandling: 'merge',
    });
  }

  public clearQuery(activatedRoute: ActivatedRoute): void {
    this._router.navigate([], {
      relativeTo: activatedRoute,
      queryParams: {},
    });
  }
}
