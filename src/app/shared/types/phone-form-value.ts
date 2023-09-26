import { Phone } from './phone';

type RawPhoneFormValue = Partial<{
  countryCode: string;
  number: string;
}>;

export class PhoneFormValue {
  public static empty(): PhoneFormValue {
    return new PhoneFormValue({
      countryCode: '',
      number: '',
    });
  }

  public readonly countryCode?: string;
  public readonly number?: string;

  constructor({ countryCode, number }: RawPhoneFormValue) {
    this.countryCode = countryCode;
    this.number = number;
  }

  public toPhone(): Phone {
    return new Phone(this.countryCode || '', this.number || '');
  }

  public toMap() {
    return {
      countryCode: this.countryCode || '',
      number: this.number || '',
    };
  }
}
