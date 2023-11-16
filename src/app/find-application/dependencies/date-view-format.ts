import { InjectionToken } from '@angular/core';

/**
 * Should be used with Angular DatePipe!
 * More info: https://angular.io/api/common/DatePipe#custom-format-options
 */
export const DATE_VIEW_FORMAT = new InjectionToken('DATE_VIEW_FORMAT', {
  providedIn: 'root',
  factory: () => 'dd.MM.yyyy',
});
