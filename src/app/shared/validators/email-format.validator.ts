import { AbstractControl, ValidationErrors } from '@angular/forms';

export const EMAIL_FORMAT_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const emailFormat = (
  control: AbstractControl<string>
): ValidationErrors | null => {
  if (control.value === '') {
    return null;
  }

  if (EMAIL_FORMAT_REGEXP.test(control.value)) {
    return null;
  }

  return { emailFormat: true };
};
