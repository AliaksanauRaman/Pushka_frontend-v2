import { InjectionToken } from '@angular/core';

import { NavigationLink } from '@shared/types/navigation-link';

export const FIND_APPLICATION_TABS_LINKS = new InjectionToken(
  'FIND_APPLICATION_TABS_LINKS',
  {
    providedIn: 'root',
    factory: () => [
      new NavigationLink('Запросы', '/find-application/requests'),
      new NavigationLink('Предложение помощи', '/find-application/help-offers'),
      new NavigationLink('Мои заказы', '/find-application/my-applications'),
    ],
  }
);
