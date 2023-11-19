import { TranslatedPlace } from './translated-place';
import { IComparable } from '@shared/interfaces/comparable';

export class FilterByPlaceValue implements IComparable<FilterByPlaceValue> {
  public get isEmpty(): boolean {
    return this.departurePlace === null && this.destination === null;
  }

  constructor(
    public readonly departurePlace: TranslatedPlace | null,
    public readonly destination: TranslatedPlace | null
  ) {}

  // TODO: Not used
  public withNewTranslations(
    translatedPlaces: ReadonlyArray<TranslatedPlace>
  ): FilterByPlaceValue {
    const { departurePlace, destination } = this;
    const newDeparturePlace =
      departurePlace !== null
        ? translatedPlaces.find(({ id }) => departurePlace.id === id)
        : undefined;
    const newDestination =
      destination !== null
        ? translatedPlaces.find(({ id }) => destination.id === id)
        : undefined;
    return new FilterByPlaceValue(
      newDeparturePlace || null,
      newDestination || null
    );
  }

  public withDeparturePlace(
    departurePlace: TranslatedPlace | null
  ): FilterByPlaceValue {
    return new FilterByPlaceValue(departurePlace, this.destination);
  }

  public withDestination(
    destination: TranslatedPlace | null
  ): FilterByPlaceValue {
    return new FilterByPlaceValue(this.departurePlace, destination);
  }

  public equalsTo(value: FilterByPlaceValue): boolean {
    return (
      this.departurePlace?.id === value.departurePlace?.id &&
      this.destination?.id === value.destination?.id
    );
  }
}
