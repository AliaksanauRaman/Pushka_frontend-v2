import { InjectionToken } from '@angular/core';

export const MAX_SCROLL_TOP_TO_SHOW_FAB = new InjectionToken(
  'MAX_SCROLL_TOP_TO_SHOW_FAB',
  {
    providedIn: 'root',
    factory: () => 250,
  }
);
