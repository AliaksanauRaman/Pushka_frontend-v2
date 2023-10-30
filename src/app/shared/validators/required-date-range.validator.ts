import { AbstractControl, ValidationErrors } from '@angular/forms';

import { DateRange } from '@shared/types/date-range';

export const requiredDateRange = (
  control: AbstractControl<DateRange | null>
): ValidationErrors | null => {
  const { value } = control;

  if (value === null || value.start === null) {
    return { startDateRequired: true };
  }

  if (value.end === null) {
    return { endDateRequired: true };
  }

  return null;
};
