import { InjectionToken } from '@angular/core';

/**
 * Do not use it with DatePipe!
 */
export const DATE_FORMAT = new InjectionToken<string>('DATE_FORMAT', {
  providedIn: 'root',
  factory: () => 'DD.MM.YYYY',
});
