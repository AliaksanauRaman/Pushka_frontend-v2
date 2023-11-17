import { InjectionToken } from '@angular/core';

import { MyApplicationTypeOption } from '@shared/types/my-application-type-option';
import { MyApplicationOptionType } from '@shared/enums/my-application-option-type.enum';

export const MY_APPLICATION_TYPES_OPTIONS = new InjectionToken(
  'MY_APPLICATION_TYPES_OPTIONS',
  {
    providedIn: 'root',
    factory: () => [
      new MyApplicationTypeOption(
        MyApplicationOptionType.ALL,
        'myApplications.all'
      ),
      new MyApplicationTypeOption(
        MyApplicationOptionType.REQUEST,
        'myApplications.request'
      ),
      new MyApplicationTypeOption(
        MyApplicationOptionType.OFFER,
        'myApplications.offer'
      ),
    ],
  }
);
