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
    path: 'not-found',
    loadComponent: () =>
      import('./core/pages/not-found-page/not-found-page.component').then(
        (c) => c.NotFoundPageComponent
      ),
  },
];
