import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { PlaceFieldState } from './place-field-state';
import { TranslatedPlace } from '@shared/types/translated-place';
import { filterPlaces } from '@shared/utils/filter-places';

const INITIAL_STATE = new PlaceFieldState({
  fieldValue: '',
  selectedPlace: null,
  specificCityPlaces: [],
  otherCityPlaces: [],
  filteredPlaces: [],
  isClearAvailable: false,
  isEmitChange: false,
});

@Injectable()
export class PlaceFieldService {
  private _specificCityPlaces: ReadonlyArray<TranslatedPlace> = [];
  private _otherCityPlaces: ReadonlyArray<TranslatedPlace> = [];

  private readonly _placeFieldState$ = new BehaviorSubject<{
    prev: PlaceFieldState;
    current: PlaceFieldState;
    isSelectedPlaceChange: boolean;
  }>({
    prev: INITIAL_STATE,
    current: INITIAL_STATE,
    isSelectedPlaceChange: false,
  });

  public readonly state$ = this._placeFieldState$.asObservable();

  public handleAllPlacesSet(allPlaces: ReadonlyArray<TranslatedPlace>): void {
    this._specificCityPlaces = allPlaces.filter(
      (place) => place.isSpecificCity
    );
    this._otherCityPlaces = allPlaces.filter((place) => place.isOtherCity);

    const selectedPlace = this.getCurrentSelectedPlace();
    const newSelectedPlace =
      selectedPlace !== null
        ? allPlaces.find(({ id }) => id === selectedPlace.id) || null
        : null;

    if (newSelectedPlace !== null) {
      this.handlePlaceSelect(newSelectedPlace);
      return;
    }

    this.updateState(
      new PlaceFieldState({
        fieldValue: '',
        specificCityPlaces: this._specificCityPlaces,
        otherCityPlaces: this._otherCityPlaces,
        selectedPlace: newSelectedPlace,
        filteredPlaces: this._specificCityPlaces,
        isClearAvailable: false,
        isEmitChange: false,
      })
    );
  }

  public handleFieldInput(fieldValue: string): void {
    const pureFieldValue = fieldValue.trim().toLowerCase();

    if (pureFieldValue === '') {
      this.updateState(
        new PlaceFieldState({
          fieldValue,
          specificCityPlaces: this._specificCityPlaces,
          otherCityPlaces: this._otherCityPlaces,
          selectedPlace: null,
          filteredPlaces: this._specificCityPlaces,
          isClearAvailable: false,
          isEmitChange: true,
        })
      );
      return;
    }

    this.updateState(
      new PlaceFieldState({
        fieldValue,
        selectedPlace: null,
        specificCityPlaces: this._specificCityPlaces,
        otherCityPlaces: this._otherCityPlaces,
        filteredPlaces: filterPlaces(this._specificCityPlaces, fieldValue),
        isClearAvailable: true,
        isEmitChange: true,
      })
    );
  }

  public handleWritePlace(place: TranslatedPlace): void {
    this.updateState(
      new PlaceFieldState({
        fieldValue: this.buildPlaceFieldValue(place),
        selectedPlace: place,
        specificCityPlaces: this._specificCityPlaces,
        otherCityPlaces: this._otherCityPlaces,
        filteredPlaces: [place],
        isClearAvailable: true,
        isEmitChange: false,
      })
    );
  }

  public handleWriteNull(): void {
    this.updateState(
      new PlaceFieldState({
        fieldValue: '',
        selectedPlace: null,
        specificCityPlaces: this._specificCityPlaces,
        otherCityPlaces: this._otherCityPlaces,
        filteredPlaces: this._specificCityPlaces,
        isClearAvailable: false,
        isEmitChange: false,
      })
    );
  }

  public handleClear(): void {
    this.updateState(
      new PlaceFieldState({
        fieldValue: '',
        selectedPlace: null,
        specificCityPlaces: this._specificCityPlaces,
        otherCityPlaces: this._otherCityPlaces,
        filteredPlaces: this._specificCityPlaces,
        isClearAvailable: false,
        isEmitChange: true,
      })
    );
  }

  public handlePlaceSelect(place: TranslatedPlace): void {
    this.updateState(
      new PlaceFieldState({
        fieldValue: this.buildPlaceFieldValue(place),
        selectedPlace: place,
        specificCityPlaces: this._specificCityPlaces,
        otherCityPlaces: this._otherCityPlaces,
        filteredPlaces: [place],
        isClearAvailable: true,
        isEmitChange: true,
      })
    );
  }

  private getCurrentSelectedPlace(): TranslatedPlace | null {
    return this._placeFieldState$.getValue().current.selectedPlace;
  }

  private updateState(newState: PlaceFieldState): void {
    const prev = this._placeFieldState$.getValue().current;
    const current = newState;

    this._placeFieldState$.next({
      prev,
      current,
      isSelectedPlaceChange: this.checkIsSelectedPlaceChange(prev, current),
    });
  }

  private checkIsSelectedPlaceChange(
    prev: PlaceFieldState,
    current: PlaceFieldState
  ): boolean {
    if (!current.isEmitChange) {
      return false;
    }

    const prevSelectedPlace = prev.selectedPlace;
    const currentSelectedPlace = current.selectedPlace;

    if (prevSelectedPlace === null && currentSelectedPlace !== null) {
      return true;
    }

    if (prevSelectedPlace !== null && currentSelectedPlace === null) {
      return true;
    }

    if (
      prevSelectedPlace !== null &&
      currentSelectedPlace !== null &&
      !currentSelectedPlace.equalsTo(prevSelectedPlace)
    ) {
      return true;
    }

    return false;
  }

  private buildPlaceFieldValue(place: TranslatedPlace): string {
    return `${place.plainCountryLabel}, ${place.plainCityLabel}`;
  }
}
