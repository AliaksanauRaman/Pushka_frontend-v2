import { TranslatedPlace } from '@shared/types/translated-place';

type PlaceFieldStateOptions = Readonly<{
  fieldValue: string;
  selectedPlace: TranslatedPlace | null;
  allPlaces: ReadonlyArray<TranslatedPlace>;
  otherCityPlaces: ReadonlyArray<TranslatedPlace>;
  filteredPlaces: ReadonlyArray<TranslatedPlace>;
  isClearAvailable: boolean;
  isEmitChange: boolean;
}>;

export class PlaceFieldState {
  public readonly fieldValue: string;
  public readonly selectedPlace: TranslatedPlace | null;
  public readonly allPlaces: ReadonlyArray<TranslatedPlace>;
  public readonly otherCityPlaces: ReadonlyArray<TranslatedPlace>;
  public readonly filteredPlaces: ReadonlyArray<TranslatedPlace>;
  public readonly isClearAvailable: boolean;
  public readonly isEmitChange: boolean;

  constructor({
    fieldValue,
    selectedPlace,
    allPlaces,
    otherCityPlaces,
    filteredPlaces,
    isClearAvailable,
    isEmitChange,
  }: PlaceFieldStateOptions) {
    this.fieldValue = fieldValue;
    this.selectedPlace = selectedPlace;
    this.allPlaces = allPlaces;
    this.otherCityPlaces = otherCityPlaces;
    this.filteredPlaces = filteredPlaces;
    this.isClearAvailable = isClearAvailable;
    this.isEmitChange = isEmitChange;
  }
}
