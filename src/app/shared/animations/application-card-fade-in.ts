import { animation, style, animate } from '@angular/animations';

export const applicationCardFadeIn = animation([
  style({ opacity: 0 }),
  animate('250ms ease-out', style({ opacity: 1 })),
]);
