import { AbstractControl, ValidationErrors } from '@angular/forms';

import { Phone } from '@shared/types/phone';

export const phoneNumberRequired = (
  control: AbstractControl<Phone | null>
): ValidationErrors | null => {
  const { value } = control;

  if (value === null) {
    return null;
  }

  if (value.number === '') {
    return { phoneNumberRequired: true };
  }

  return null;
};
