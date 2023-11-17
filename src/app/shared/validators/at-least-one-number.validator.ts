import { AbstractControl, ValidationErrors } from '@angular/forms';

const NUMBER_REGEX = /\d+/;

export const atLeastOneNumber = (
  control: AbstractControl<string>
): ValidationErrors | null => {
  const { value } = control;

  if (value === '') {
    return null;
  }

  if (NUMBER_REGEX.test(value)) {
    return null;
  }

  return { atLeastOneNumber: true };
};
