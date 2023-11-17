import { Place } from './place';
import { Country } from './country';
import { City } from './city';
import { IComparable } from '@shared/interfaces/comparable';

export class TranslatedPlace
  extends Place
  implements IComparable<TranslatedPlace>
{
  public static override is(value: unknown): value is TranslatedPlace {
    return value instanceof TranslatedPlace;
  }

  constructor(
    { countryId, countryLabel, cityId, cityLabel }: Place,
    public readonly plainCountryLabel: string,
    public readonly plainCityLabel: string
  ) {
    super(new Country(countryId, countryLabel), new City(cityId, cityLabel));
  }

  public override equalsTo(place: TranslatedPlace): boolean {
    return (
      this.plainCityLabel === place.plainCityLabel &&
      this.plainCountryLabel === place.plainCountryLabel &&
      super.equalsTo(place)
    );
  }
}
