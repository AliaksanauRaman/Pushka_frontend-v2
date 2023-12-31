import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  PreloadAllModules,
  TitleStrategy,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { DialogModule } from '@angular/cdk/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { CoreTranslateModule } from '@core/translate/core-translate.module';

import { authorizationInterceptor } from '@core/interceptors/authorization.interceptor';
import { PushkaTitleStrategy } from '@core/translate/pushka-title-strategy';

import { STORE } from './store';
import { appRoutes } from './app.routes';
import { environment } from '../environments/environment';

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(withInterceptors([authorizationInterceptor])),
    importProvidersFrom(
      DialogModule,
      MatSnackBarModule,
      MatBottomSheetModule,
      NgxsModule.forRoot(STORE, { developmentMode: !environment.isProduction }),
      NgxsReduxDevtoolsPluginModule.forRoot({
        disabled: environment.isProduction,
      }),
      CoreTranslateModule
    ),
    provideRouter(appRoutes, withPreloading(PreloadAllModules)),
    { provide: TitleStrategy, useClass: PushkaTitleStrategy },
    provideServiceWorker('ngsw-worker.js', {
      enabled: environment.isProduction,
      registrationStrategy: 'registerWhenStable:20000',
    }),
  ],
};
