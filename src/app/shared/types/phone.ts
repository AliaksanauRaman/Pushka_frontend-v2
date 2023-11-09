import { IComparable } from '@shared/interfaces/comparable';

export class Phone implements IComparable<Phone> {
  public static is(value: unknown): value is Phone {
    return value instanceof Phone;
  }

  public get isEmpty(): boolean {
    return this.countryCode === '' && this.number === '';
  }

  constructor(
    public readonly countryCode: string,
    public readonly number: string
  ) {}

  public equalsTo(value: Phone): boolean {
    return (
      this.countryCode === value.countryCode && this.number === value.number
    );
  }

  public toMap() {
    return {
      countryCode: this.countryCode,
      number: this.number,
    };
  }
}
