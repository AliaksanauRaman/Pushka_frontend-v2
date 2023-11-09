import { AbstractControl, ValidationErrors } from '@angular/forms';

const LATIN_LETTER_REGEX = /[a-zA-Z]+/;

export const atLeastOneLatinLetter = (
  control: AbstractControl<string>
): ValidationErrors | null => {
  const { value } = control;

  if (value === '') {
    return null;
  }

  if (LATIN_LETTER_REGEX.test(value)) {
    return null;
  }

  return { atLeastOneLatinLetter: true };
};
