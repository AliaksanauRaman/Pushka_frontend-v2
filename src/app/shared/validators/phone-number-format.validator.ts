import { AbstractControl, ValidationErrors } from '@angular/forms';

import { Phone } from '@shared/types/phone';

export const PHONE_NUMBER_REGEXP = /^[0-9]{7,12}$/;

export const phoneNumberFormat = (
  control: AbstractControl<Phone | null>
): ValidationErrors | null => {
  const { value } = control;

  if (value === null) {
    return null;
  }

  if (!PHONE_NUMBER_REGEXP.test(value.number)) {
    return { phoneNumberFormat: true };
  }

  return null;
};
