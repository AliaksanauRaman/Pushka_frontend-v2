import { InjectionToken } from '@angular/core';

import { Dimensions } from '@shared/types/dimensions';

export type SpinnerSize = 'small' | 'medium' | 'big';
export type SpinnerColor = 'white' | 'primary';

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

export const SPINNER_FILLS = new InjectionToken<
  Readonly<Record<SpinnerColor, string>>
>('SPINNER_FILLS', {
  providedIn: 'root',
  factory: () => ({
    white: '#ffffff',
    primary: '#0181a8',
  }),
});
