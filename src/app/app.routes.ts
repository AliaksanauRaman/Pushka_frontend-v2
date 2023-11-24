import { Routes } from '@angular/router';

import { activateUserGuard } from './activate-user/guards/activate-user.guard';

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
        redirectTo: '/find-application/requests',
      },
      {
        path: 'send-parcel',
        title: 'pageTitle.sendParcel',
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
        title: 'pageTitle.deliverParcel',
        loadComponent: () =>
          import(
            './deliver-parcel/pages/deliver-parcel-page/deliver-parcel-page.component'
          ).then((c) => c.DeliverParcelPageComponent),
      },
      {
        path: 'activate-user',
        pathMatch: 'full',
        canActivate: [activateUserGuard],
        loadComponent: () =>
          import(
            './activate-user/components/activate-user-placeholder/activate-user-placeholder.component'
          ).then((c) => c.ActivateUserPlaceholderComponent),
      },
      {
        path: 'not-found',
        title: 'pageTitle.notFound',
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
