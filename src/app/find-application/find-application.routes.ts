import { Routes } from '@angular/router';

import { myApplicationsPageGuard } from './guards/my-applications-page.guard';

export const findApplicationRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './layouts/base-find-application-layout/base-find-application-layout.component'
      ).then((c) => c.BaseFindApplicationLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/find-application/requests',
      },
      {
        path: 'requests',
        title: 'pageTitle.findRequest',
        loadComponent: () =>
          import('./pages/requests-page/requests-page.component').then(
            (c) => c.RequestsPageComponent
          ),
      },
      {
        path: 'offers',
        title: 'pageTitle.findOffer',
        loadComponent: () =>
          import('./pages/offers-page/offers-page.component').then(
            (c) => c.OffersPageComponent
          ),
      },
      {
        path: 'my-applications',
        title: 'pageTitle.findMyApplication',
        canActivate: [myApplicationsPageGuard],
        loadComponent: () =>
          import(
            './pages/my-applications-page/my-applications-page.component'
          ).then((c) => c.MyApplicationsPageComponent),
      },
    ],
  },
];
