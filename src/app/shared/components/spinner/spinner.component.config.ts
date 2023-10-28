import { InjectionToken } from '@angular/core';

import { SpinnerSize } from './spinner-size';
import { Dimensions } from '@shared/types/dimensions';

export const SPINNER_CONTAINER_DIMENSIONS = new InjectionToken<
  Readonly<Record<SpinnerSize, Dimensions>>
>('SPINNER_CONTAINER_DIMENSIONS', {
  providedIn: 'root',
  factory: () => ({
    small: new Dimensions(24, 24),
    medium: new Dimensions(36, 36),
    big: new Dimensions(48, 48),
  }),
});

export const SPINNER_DIMENSIONS = new InjectionToken<
  Readonly<Record<SpinnerSize, Dimensions>>
>('SPINNER_DIMENSIONS', {
  providedIn: 'root',
  factory: () => ({
    small: new Dimensions(18, 18),
    medium: new Dimensions(24, 24),
    big: new Dimensions(36, 36),
  }),
});
