import { ApplicationConfig, NgZone, ɵNoopNgZone } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // TODO: A temporary workaround, the issue:
    // https://github.com/angular/angular/issues/47538
    {
      provide: NgZone,
      useClass: ɵNoopNgZone,
    },
  ],
};
