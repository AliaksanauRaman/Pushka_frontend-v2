import { IComparable } from '@shared/interfaces/comparable';

const OTHER_CITY_LABEL = 'city.other';

export class City implements IComparable<City> {
  public get isOther(): boolean {
    return this.label === OTHER_CITY_LABEL;
  }

  public get isSpecific(): boolean {
    return this.label !== OTHER_CITY_LABEL;
  }

  constructor(public readonly id: number, public readonly label: string) {}

  public equalsTo(value: City): boolean {
    return this.id === value.id && this.label === value.label;
  }
}
