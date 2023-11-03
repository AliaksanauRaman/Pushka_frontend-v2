import { IComparable } from '@shared/interfaces/comparable';

export class CountryCode implements IComparable<CountryCode> {
  constructor(
    public readonly value: string,
    public readonly countryLabel: string
  ) {}

  public equalsTo({ value, countryLabel }: CountryCode): boolean {
    return this.value === value && this.countryLabel === countryLabel;
  }
}
