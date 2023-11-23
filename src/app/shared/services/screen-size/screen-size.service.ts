import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  private readonly _breakpointObserver = inject(BreakpointObserver);

  public readonly isLaptop = toSignal(
    this._breakpointObserver
      .observe(['(min-width: 1024px)'])
      .pipe(map(({ matches }) => matches))
  );
}
