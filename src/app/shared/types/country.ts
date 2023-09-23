import { IComparable } from '@shared/interfaces/comparable';

export class Country implements IComparable<Country> {
  constructor(public readonly id: number, public readonly label: string) {}

  public equalsTo(country: Country): boolean {
    return this.id === country.id && this.label === country.label;
  }
}
