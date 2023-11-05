import { InjectionToken } from '@angular/core';

import { NavigationLink } from '@shared/types/navigation-link';

export const FIND_APPLICATION_TABS_LINKS = new InjectionToken(
  'FIND_APPLICATION_TABS_LINKS',
  {
    providedIn: 'root',
    factory: () => [
      new NavigationLink(
        'navigationLabel.requests',
        '/find-application/requests'
      ),
      new NavigationLink('navigationLabel.offers', '/find-application/offers'),
      new NavigationLink(
        'navigationLabel.myApplications',
        '/find-application/my-applications'
      ),
    ],
  }
);
