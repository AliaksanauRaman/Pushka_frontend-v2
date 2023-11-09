import { InjectionToken } from '@angular/core';

import {
  DEFAULT_EMAIL_MAX_LENGTH,
  DEFAULT_PASSWORD_MAX_LENGTH,
} from '@shared/constants';

export const LOGIN_FORM_CONFIG = new InjectionToken('LOGIN_FORM_CONFIG', {
  providedIn: 'root',
  factory: () => ({
    emailMaxLength: DEFAULT_EMAIL_MAX_LENGTH,
    passwordMaxLength: DEFAULT_PASSWORD_MAX_LENGTH,
  }),
});
