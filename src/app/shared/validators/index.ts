import { AbstractControl, ValidationErrors } from '@angular/forms';

import { requiredDateRange } from './required-date-range.validator';
import { emailFormat } from './email-format.validator';
import { countryCodeRequired } from './country-code-required.validator';
import { phoneNumberRequired } from './phone-number-required';
import { phoneNumberFormat } from './phone-number-format.validator';
import { atLeastOneLatinLetter } from './at-least-one-latin-letter.validator';
import { atLeastOneDigit } from './at-least-one-digit.validator';
import { passwordsMatch } from './passwords-match.validator';
import { DateRange } from '@shared/types/date-range';
import { Phone } from '@shared/types/phone';

export class CustomValidators {
  public static requiredDateRange(
    control: AbstractControl<DateRange>
  ): ValidationErrors | null {
    return requiredDateRange(control);
  }

  public static emailFormat(
    control: AbstractControl<string>
  ): ValidationErrors | null {
    return emailFormat(control);
  }

  public static countryCodeRequired(
    control: AbstractControl<Phone | null>
  ): ValidationErrors | null {
    return countryCodeRequired(control);
  }

  public static phoneNumberRequired(
    control: AbstractControl<Phone | null>
  ): ValidationErrors | null {
    return phoneNumberRequired(control);
  }

  public static phoneNumberFormat(
    control: AbstractControl<Phone | null>
  ): ValidationErrors | null {
    return phoneNumberFormat(control);
  }

  public static atLeastOneLatinLetter(
    control: AbstractControl<string>
  ): ValidationErrors | null {
    return atLeastOneLatinLetter(control);
  }

  public static atLeastOneDigit(
    control: AbstractControl<string>
  ): ValidationErrors | null {
    return atLeastOneDigit(control);
  }

  public static passwordsMatch(
    control: AbstractControl
  ): ValidationErrors | null {
    return passwordsMatch(control);
  }
}
