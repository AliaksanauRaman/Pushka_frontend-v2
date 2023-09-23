import { InjectionToken } from '@angular/core';

import { BaseEnvironment } from '../../environments/base-environment';
import { environment } from '../../environments/environment';

export const ENVIRONMENT = new InjectionToken<BaseEnvironment>('ENVIRONMENT', {
  providedIn: 'root',
  factory: () => environment,
});
