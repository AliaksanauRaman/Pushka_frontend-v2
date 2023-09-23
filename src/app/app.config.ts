import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { STORE } from './store';
import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      NgxsModule.forRoot(STORE, { developmentMode: !environment.isProduction }),
      NgxsLoggerPluginModule.forRoot({
        collapsed: false,
        disabled: environment.isProduction,
      })
    ),
    provideRouter(routes),
  ],
};
