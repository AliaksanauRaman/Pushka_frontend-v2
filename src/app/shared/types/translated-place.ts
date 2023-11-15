import { Place } from './place';
import { Country } from './country';
import { City } from './city';

export class TranslatedPlace extends Place {
  constructor(
    { countryId, countryLabel, cityId, cityLabel }: Place,
    public readonly plainCountryLabel: string,
    public readonly plainCityLabel: string
  ) {
    super(new Country(countryId, countryLabel), new City(cityId, cityLabel));
  }
}
