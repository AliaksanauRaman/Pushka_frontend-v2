import { PlaceFieldStateName } from './place-field-state-name.enum';
import { Place } from '@shared/types/place';

type PlaceFieldStateOptions = Readonly<{
  name: PlaceFieldStateName;
  fieldValue: string;
  selectedPlace: Place | null;
  filteredPlaces: ReadonlyArray<Place>;
  isClearAvailable: boolean;
  isEmitChange: boolean;
}>;

export class PlaceFieldState {
  public readonly name: PlaceFieldStateName;
  public readonly fieldValue: string;
  public readonly selectedPlace: Place | null;
  public readonly filteredPlaces: ReadonlyArray<Place>;
  public readonly isClearAvailable: boolean;
  public readonly isEmitChange: boolean;

  constructor({
    name,
    fieldValue,
    selectedPlace,
    filteredPlaces,
    isClearAvailable,
    isEmitChange,
  }: PlaceFieldStateOptions) {
    this.name = name;
    this.fieldValue = fieldValue;
    this.selectedPlace = selectedPlace;
    this.filteredPlaces = filteredPlaces;
    this.isClearAvailable = isClearAvailable;
    this.isEmitChange = isEmitChange;
  }
}
