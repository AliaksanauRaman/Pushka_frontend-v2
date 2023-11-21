import { animation, style, animate } from '@angular/animations';

export const applicationCardSlideOut = animation([
  animate(
    '250ms ease-in',
    style({ height: '0px', padding: '0px', left: '100%', opacity: 0 })
  ),
]);
