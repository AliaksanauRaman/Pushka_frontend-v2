import { InjectionToken } from '@angular/core';

export const VIEW_DATE_FORMAT = new InjectionToken('VIEW_DATE_FORMAT', {
  providedIn: 'root',
  factory: () => 'dd.MM.yyyy',
});
