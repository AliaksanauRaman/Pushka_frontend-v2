import { ClassProvider } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

import { PushkaDateAdapter } from '@shared/adapters/pushka-date-adapter';

export const DATE_ADAPTER_PROVIDER: ClassProvider = {
  provide: DateAdapter,
  useClass: PushkaDateAdapter,
};
