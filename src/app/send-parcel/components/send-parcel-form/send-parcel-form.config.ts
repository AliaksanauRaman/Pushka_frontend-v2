import { InjectionToken } from '@angular/core';

import {
  DEFAULT_DESCRIPTION_MAX_LENGTH,
  DEFAULT_FULL_NAME_MAX_LENGTH,
  DEFAULT_EMAIL_MAX_LENGTH,
} from '@shared/constants';

export const SEND_PARCEL_FORM_CONFIG = new InjectionToken(
  'SEND_PARCEL_FORM_CONFIG',
  {
    providedIn: 'root',
    factory: () => ({
      descriptionMaxLength: DEFAULT_DESCRIPTION_MAX_LENGTH,
      fullNameMaxLength: DEFAULT_FULL_NAME_MAX_LENGTH,
      emailMaxLength: DEFAULT_EMAIL_MAX_LENGTH,
    }),
  }
);
