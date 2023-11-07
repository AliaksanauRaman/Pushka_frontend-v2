import { AbstractControl, ValidationErrors } from '@angular/forms';

export const PHONE_NUMBER_REGEXP = /^[0-9]{7,12}$/;

export const phoneNumberFormat = (
  control: AbstractControl<string>
): ValidationErrors | null => {
  const { value } = control;

  if (value === '') {
    return null;
  }

  if (PHONE_NUMBER_REGEXP.test(value)) {
    return null;
  }

  return { phoneNumberFormat: true };
};
