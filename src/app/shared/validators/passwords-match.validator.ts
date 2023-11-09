import { AbstractControl, ValidationErrors } from '@angular/forms';

export const passwordsMatch = (
  control: AbstractControl
): ValidationErrors | null => {
  const passwordControl = control.get(
    'password'
  ) as AbstractControl<string> | null;
  const passwordConfirmationControl = control.get(
    'passwordConfirmation'
  ) as AbstractControl<string> | null;

  if (passwordControl === null) {
    throw new Error('Password field is missing!');
  }

  if (passwordConfirmationControl === null) {
    throw new Error('Password confirmation field is missing!');
  }

  if (
    passwordConfirmationControl.errors &&
    !passwordConfirmationControl.errors['passwordsMatch']
  ) {
    return null;
  }

  if (passwordControl.value !== passwordConfirmationControl.value) {
    passwordConfirmationControl.setErrors({ passwordsMatch: true });
  } else {
    passwordConfirmationControl.setErrors(null);
  }

  return null;
};
