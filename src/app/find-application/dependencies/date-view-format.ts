import { InjectionToken } from '@angular/core';

export const DATE_VIEW_FORMAT = new InjectionToken('DATE_VIEW_FORMAT', {
  providedIn: 'root',
  factory: () => 'dd.MM.yyyy',
});
