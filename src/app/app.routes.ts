import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/layouts/base-layout/base-layout.component').then(
        (c) => c.BaseLayoutComponent
      ),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/find-application',
      },
      {
        path: 'send-parcel',
        loadComponent: () =>
          import(
            './send-parcel/pages/send-parcel-page/send-parcel-page.component'
          ).then((c) => c.SendParcelPageComponent),
      },
      {
        path: 'find-application',
        loadChildren: () =>
          import('./find-application/find-application.routes').then(
            (r) => r.findApplicationRoutes
          ),
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
      {
        path: '**',
        redirectTo: '/not-found',
      },
    ],
  },
];
