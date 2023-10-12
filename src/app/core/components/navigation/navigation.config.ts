import { InjectionToken } from '@angular/core';

import { NavigationLink } from '@shared/types/navigation-link';

export const NAVIGATION_LINKS = new InjectionToken<
  ReadonlyArray<NavigationLink>
>('NAVIGATION_LINKS', {
  providedIn: 'root',
  factory: () => [
    new NavigationLink('Отправить посылку', '/send-parcel'),
    new NavigationLink('Найти заявку', '/find-application'),
    new NavigationLink('Доставить посылку', '/deliver-parcel'),
  ],
});
