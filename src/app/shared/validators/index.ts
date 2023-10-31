import { AbstractControl, ValidationErrors } from '@angular/forms';

import { requiredDateRange } from './required-date-range.validator';
import { emailFormat } from './email-format.validator';
import { DateRange } from '@shared/types/date-range';

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
}
