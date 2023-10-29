import { FactoryProvider } from '@angular/core';
import { MatDateFormats, MAT_DATE_FORMATS } from '@angular/material/core';

import { DATE_FORMAT } from '@shared/dependencies/date-format';

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
