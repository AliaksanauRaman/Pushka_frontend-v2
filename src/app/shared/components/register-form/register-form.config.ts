import { InjectionToken } from '@angular/core';

import {
  DEFAULT_EMAIL_MAX_LENGTH,
  DEFAULT_FULL_NAME_MAX_LENGTH,
  DEFAULT_PASSWORD_MAX_LENGTH,
  DEFAULT_PASSWORD_MIN_LENGTH,
} from '@shared/constants';

export const REGISTER_FORM_CONFIG = new InjectionToken('REGISTER_FORM_CONFIG', {
  providedIn: 'root',
  factory: () => ({
    fullNameMaxLength: DEFAULT_FULL_NAME_MAX_LENGTH,
    emailMaxLength: DEFAULT_EMAIL_MAX_LENGTH,
    passwordMinLength: DEFAULT_PASSWORD_MIN_LENGTH,
    passwordMaxLength: DEFAULT_PASSWORD_MAX_LENGTH,
  }),
});
