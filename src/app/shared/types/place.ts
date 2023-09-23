import { City } from './city';
import { Country } from './country';
import { Comparable } from '@shared/interfaces/comparable';

export class Place implements Comparable<Place> {
  public static is(value: unknown): value is Place {
    return value instanceof Place;
  }

  public get id(): number {
    return this.city.id;
  }

  public get countryLabel(): string {
    return this.country.label;
  }

  public get cityLabel(): string {
    return this.city.label;
  }

  constructor(private readonly country: Country, private readonly city: City) {}

  public equalsTo(place: Place): boolean {
    return (
      this.country.equalsTo(place.country) && this.city.equalsTo(place.city)
    );
  }
}
