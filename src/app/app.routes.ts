import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'send-parcel',
    loadComponent: () =>
      import(
        './send-parcel/pages/send-parcel-page/send-parcel-page.component'
      ).then((c) => c.SendParcelPageComponent),
  },
  {
    path: 'find-application',
    loadComponent: () =>
      import(
        './find-application/pages/find-application-page/find-application-page.component'
      ).then((c) => c.FindApplicationPageComponent),
  },
  {
    path: 'deliver-parcel',
    loadComponent: () =>
      import(
        './deliver-parcel/pages/deliver-parcel-page/deliver-parcel-page.component'
      ).then((c) => c.DeliverParcelPageComponent),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./core/pages/not-found-page/not-found-page.component').then(
        (c) => c.NotFoundPageComponent
      ),
  },
];
