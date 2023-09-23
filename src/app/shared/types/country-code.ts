import { Comparable } from '@shared/interfaces/comparable';

export class CountryCode implements Comparable<CountryCode> {
  public static is(value: unknown): value is CountryCode {
    return value instanceof CountryCode;
  }

  constructor(
    public readonly countryLabel: string,
    public readonly value: string
  ) {}

  public equalsTo(countryCode: CountryCode): boolean {
    return (
      this.countryLabel === countryCode.countryLabel &&
      this.value === countryCode.value
    );
  }
}
