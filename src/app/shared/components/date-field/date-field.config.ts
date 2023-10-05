import { ClassProvider, FactoryProvider } from '@angular/core';
import {
  MatDateFormats,
  DateAdapter,
  MAT_DATE_FORMATS,
} from '@angular/material/core';

import { PushkaDateAdapter } from '@shared/adapters/pushka-date-adapter';
import { DATE_FORMAT } from '@shared/dependencies/date-format';

export const DATE_ADAPTER_PROVIDER: ClassProvider = {
  provide: DateAdapter,
  useClass: PushkaDateAdapter,
};

export const MAT_DATE_FORMATS_PROVIDER: FactoryProvider = {
  provide: MAT_DATE_FORMATS,
  useFactory: dateFormatsFactory,
  deps: [DATE_FORMAT],
};

function dateFormatsFactory(dateFormat: string): Readonly<MatDateFormats> {
  return {
    parse: {
      dateInput: dateFormat,
    },
    display: {
      dateInput: dateFormat,
      monthLabel: 'MMM',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
    },
  };
}
