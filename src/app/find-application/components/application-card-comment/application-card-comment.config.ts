import { InjectionToken, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '@global/window';
import { MATH } from '@global/math';

const LINE_HEIGHT_FRACTION = 1.6;
const MAX_LINES = 3;

export const MAX_COLLAPSED_TEXT_HEIGHT = new InjectionToken(
  'MAX_COLLAPSED_TEXT_HEIGHT',
  {
    providedIn: 'root',
    factory: () => {
      const window = inject(WINDOW);
      const document = inject(DOCUMENT);
      const math = inject(MATH);

      const fontSize = parseFloat(
        window.getComputedStyle(document.documentElement).fontSize
      );

      return math.ceil(fontSize * LINE_HEIGHT_FRACTION * MAX_LINES);
    },
  }
);
