import { Routes } from '@angular/router';

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
        loadComponent: () =>
          import('./pages/requests-page/requests-page.component').then(
            (c) => c.RequestsPageComponent
          ),
      },
      {
        path: 'help-offers',
        loadComponent: () =>
          import('./pages/help-offers-page/help-offers-page.component').then(
            (c) => c.HelpOffersPageComponent
          ),
      },
      {
        path: 'my-applications',
        loadComponent: () =>
          import(
            './pages/my-applications-page/my-applications-page.component'
          ).then((c) => c.MyApplicationsPageComponent),
      },
    ],
  },
];
