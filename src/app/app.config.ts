import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { CoreTranslateModule } from '@core/translate/core-translate.module';

import { authorizationInterceptor } from '@core/interceptors/authorization.interceptor';

import { STORE } from './store';
import { appRoutes } from './app.routes';
import { environment } from '../environments/environment';

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(withInterceptors([authorizationInterceptor])),
    importProvidersFrom(
      NgxsModule.forRoot(STORE, { developmentMode: !environment.isProduction }),
      NgxsLoggerPluginModule.forRoot({
        collapsed: false,
        disabled: environment.isProduction,
      }),
      CoreTranslateModule
    ),
    provideRouter(appRoutes),
  ],
};
