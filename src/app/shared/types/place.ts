import { City } from './city';
import { Country } from './country';
import { IComparable } from '@shared/interfaces/comparable';

export class Place implements IComparable<Place> {
  public static is(value: unknown): value is Place {
    return value instanceof Place;
  }

  public static build(
    countryId: number,
    countryLabel: string,
    cityId: number,
    cityLabel: string
  ): Place {
    return new Place(
      new Country(countryId, countryLabel),
      new City(cityId, cityLabel)
    );
  }

  public get id(): number {
    return this.cityId;
  }

  public get cityId(): number {
    return this.city.id;
  }

  public get countryId(): number {
    return this.country.id;
  }

  public get countryLabel(): string {
    return this.country.label;
  }

  public get cityLabel(): string {
    return this.city.label;
  }

  constructor(private readonly country: Country, private readonly city: City) {}

  public equalsTo(place: Place): boolean {
    return this.id === place.id;
  }
}
