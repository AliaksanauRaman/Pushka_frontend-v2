import { InjectionToken } from '@angular/core';

import { UniqueNavigationLink } from '@shared/types/unique-navigation-link';

export const ALL_FIND_APPLICATION_LINKS = new InjectionToken(
  'ALL_FIND_APPLICATION_LINKS',
  {
    providedIn: 'root',
    factory: () => [
      new UniqueNavigationLink(
        1,
        'navigationLabel.requests',
        '/find-application/requests'
      ),
      new UniqueNavigationLink(
        2,
        'navigationLabel.offers',
        '/find-application/offers'
      ),
      new UniqueNavigationLink(
        3,
        'navigationLabel.myApplications',
        '/find-application/my-applications'
      ),
    ],
  }
);
