import { InjectionToken } from '@angular/core';

import { NavigationLink } from '@shared/types/navigation-link';

export const NAVIGATION_LINKS = new InjectionToken<
  ReadonlyArray<NavigationLink>
>('NAVIGATION_LINKS', {
  providedIn: 'root',
  factory: () => [
    new NavigationLink('navigationLabel.sendParcel', '/send-parcel'),
    new NavigationLink('navigationLabel.findApplication', '/find-application'),
    new NavigationLink('navigationLabel.deliverParcel', '/deliver-parcel'),
  ],
});
