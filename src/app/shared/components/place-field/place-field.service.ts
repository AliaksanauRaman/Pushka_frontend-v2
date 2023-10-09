import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { PlaceFieldState } from './place-field-state';
import { PlaceFieldStateName } from './place-field-state-name.enum';
import { Place } from '@shared/types/place';

const INITIAL_STATE = new PlaceFieldState({
  name: PlaceFieldStateName.INITIAL,
  fieldValue: '',
  selectedPlace: null,
  filteredPlaces: [],
  isClearAvailable: false,
  isEmitChange: false,
});

@Injectable()
export class PlaceFieldService {
  private _places: ReadonlyArray<Place> = [];
  private readonly _placeFieldState$ = new BehaviorSubject<{
    prev: PlaceFieldState;
    next: PlaceFieldState;
    isSelectedPlaceChange: boolean;
  }>({
    prev: INITIAL_STATE,
    next: INITIAL_STATE,
    isSelectedPlaceChange: false,
  });

  public readonly state$ = this._placeFieldState$.asObservable();

  public handlePlacesSet(places: ReadonlyArray<Place>): void {
    this._places = places;
    this.updateState(
      new PlaceFieldState({
        name: PlaceFieldStateName.PLACES_SET,
        fieldValue: '',
        selectedPlace: null,
        filteredPlaces: places,
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
          name: PlaceFieldStateName.FIELD_INPUT,
          fieldValue,
          selectedPlace: null,
          filteredPlaces: this._places,
          isClearAvailable: false,
          isEmitChange: true,
        })
      );
      return;
    }

    this.updateState(
      new PlaceFieldState({
        name: PlaceFieldStateName.FIELD_INPUT,
        fieldValue,
        selectedPlace: null,
        filteredPlaces: this._places.filter((place) => {
          return (
            place.countryLabel.toLowerCase().includes(pureFieldValue) ||
            place.cityLabel.toLowerCase().includes(pureFieldValue)
          );
        }),
        isClearAvailable: true,
        isEmitChange: true,
      })
    );
  }

  public handleWritePlace(place: Place): void {
    this.updateState(
      new PlaceFieldState({
        name: PlaceFieldStateName.WRITE_PLACE,
        fieldValue: '',
        selectedPlace: place,
        filteredPlaces: [place],
        isClearAvailable: true,
        isEmitChange: false,
      })
    );
  }

  public handleWriteNull(): void {
    this.updateState(
      new PlaceFieldState({
        name: PlaceFieldStateName.WRITE_NULL,
        fieldValue: '',
        selectedPlace: null,
        filteredPlaces: this._places,
        isClearAvailable: false,
        isEmitChange: false,
      })
    );
  }

  public handleClear(): void {
    this.updateState(
      new PlaceFieldState({
        name: PlaceFieldStateName.CLEAR,
        fieldValue: '',
        selectedPlace: null,
        filteredPlaces: this._places,
        isClearAvailable: false,
        isEmitChange: true,
      })
    );
  }

  public handlePlaceSelect(place: Place): void {
    this.updateState(
      new PlaceFieldState({
        name: PlaceFieldStateName.PLACE_SELECT,
        fieldValue: `${place.countryLabel} ${place.cityLabel}`,
        selectedPlace: place,
        filteredPlaces: [place],
        isClearAvailable: true,
        isEmitChange: true,
      })
    );
  }

  private updateState(newState: PlaceFieldState): void {
    const prev = this._placeFieldState$.getValue().next;
    const next = newState;

    this._placeFieldState$.next({
      prev,
      next,
      isSelectedPlaceChange: this.checkIsSelectedPlaceChange(prev, next),
    });
  }

  private checkIsSelectedPlaceChange(
    prev: PlaceFieldState,
    next: PlaceFieldState
  ): boolean {
    if (!next.isEmitChange) {
      return false;
    }

    const prevSelectedPlace = prev.selectedPlace;
    const nextSelectedPlace = next.selectedPlace;

    if (prevSelectedPlace === null && nextSelectedPlace !== null) {
      return true;
    }

    if (prevSelectedPlace !== null && nextSelectedPlace === null) {
      return true;
    }

    if (
      prevSelectedPlace !== null &&
      nextSelectedPlace !== null &&
      !nextSelectedPlace.equalsTo(prevSelectedPlace)
    ) {
      return true;
    }

    return false;
  }
}
