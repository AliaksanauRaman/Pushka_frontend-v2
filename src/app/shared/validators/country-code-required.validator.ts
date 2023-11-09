import { AbstractControl, ValidationErrors } from '@angular/forms';

import { Phone } from '@shared/types/phone';

export const countryCodeRequired = (
  control: AbstractControl<Phone | null>
): ValidationErrors | null => {
  const { value } = control;

  if (value === null) {
    return null;
  }

  if (value.countryCode === '') {
    return { countryCodeRequired: true };
  }

  return null;
};
