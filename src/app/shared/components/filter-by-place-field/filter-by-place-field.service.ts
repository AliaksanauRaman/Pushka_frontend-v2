import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { PlacesService } from '@shared/services/places/places.service';

import { FilterByPlaceValue } from '@shared/types/filter-by-place-value';
import { TranslatedPlace } from '@shared/types/translated-place';
import { filterPlaces } from '@shared/utils/filter-places';

@Injectable()
export class FilterByPlaceFieldService {
  private readonly _placesService = inject(PlacesService);

  public readonly value = computed(() => {
    return new FilterByPlaceValue(
      this._selectedDeparturePlace(),
      this._selectedDestination()
    );
  });

  public readonly departurePlaceFieldValue = computed(() => {
    const selectedDeparturePlace = this._selectedDeparturePlace();

    if (selectedDeparturePlace !== null) {
      return selectedDeparturePlace.plainCityLabel;
    }

    return this._departurePlaceFieldValue();
  });

  public readonly destinationFieldValue = computed(() => {
    const selectedDestination = this._selectedDestination();

    if (selectedDestination !== null) {
      return selectedDestination.plainCityLabel;
    }

    return this._destinationFieldValue();
  });

  public get filteredPlaces(): Signal<ReadonlyArray<TranslatedPlace>> {
    return this._filteredPlaces;
  }

  private readonly _allPlaces = toSignal(this._placesService.translatedPlaces$);

  private readonly _departurePlaceFieldValue = signal('');
  private readonly _selectedDeparturePlace = signal<TranslatedPlace | null>(
    null
  );
  private readonly _filteredDeparturePlaces = computed(() =>
    filterPlaces(this._allPlaces(), this.departurePlaceFieldValue())
  );

  private readonly _destinationFieldValue = signal('');
  private readonly _selectedDestination = signal<TranslatedPlace | null>(null);
  private readonly _filteredDestinations = computed(() =>
    filterPlaces(this._allPlaces(), this.destinationFieldValue())
  );

  private _filteredPlaces = this._filteredDeparturePlaces;

  public setValue(value: FilterByPlaceValue): void {
    this._selectedDeparturePlace.set(value.departurePlace);
    this._selectedDestination.set(value.destination);
  }

  public switchToDeparturePlace(): void {
    this._filteredPlaces = this._filteredDeparturePlaces;
  }

  public switchToDestination(): void {
    this._filteredPlaces = this._filteredDestinations;
  }

  public handlePlaceSelect(place: TranslatedPlace): void {
    if (
      this.checkIsDeparturePlaceFieldActive() &&
      !this._selectedDeparturePlace()?.equalsTo(place)
    ) {
      this._selectedDeparturePlace.set(place);
      return;
    }

    if (
      this.checkIsDestinationFieldActive() &&
      !this._selectedDestination()?.equalsTo(place)
    ) {
      this._selectedDestination.set(place);
      return;
    }
  }

  public handleDeparturePlaceFieldInput(value: string): void {
    this._selectedDeparturePlace.set(null);
    this._departurePlaceFieldValue.set(value);
  }

  public handleDestinationFieldInput(value: string): void {
    this._selectedDestination.set(null);
    this._destinationFieldValue.set(value);
  }

  private checkIsDeparturePlaceFieldActive(): boolean {
    return this._filteredPlaces === this._filteredDeparturePlaces;
  }

  private checkIsDestinationFieldActive(): boolean {
    return this._filteredPlaces === this._filteredDestinations;
  }
}
