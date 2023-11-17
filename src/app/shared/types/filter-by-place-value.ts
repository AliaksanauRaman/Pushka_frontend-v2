import { TranslatedPlace } from './translated-place';

export class FilterByPlaceValue {
  public get isEmpty(): boolean {
    return this.departurePlace === null && this.destination === null;
  }

  constructor(
    public readonly departurePlace: TranslatedPlace | null,
    public readonly destination: TranslatedPlace | null
  ) {}
}
