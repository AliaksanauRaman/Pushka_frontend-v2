import { IComparable } from '@shared/interfaces/comparable';

export class City implements IComparable<City> {
  public get isOther(): boolean {
    return this.label === 'city.other';
  }

  constructor(public readonly id: number, public readonly label: string) {}

  public equalsTo(value: City): boolean {
    return this.id === value.id && this.label === value.label;
  }
}
