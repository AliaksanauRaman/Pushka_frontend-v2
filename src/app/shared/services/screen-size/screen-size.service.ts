import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';

const LAPTOP_MEDIA_QUERY = '(min-width: 1024px)';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  private readonly _breakpointObserver = inject(BreakpointObserver);

  public readonly isLaptop = toSignal(
    this._breakpointObserver
      .observe([LAPTOP_MEDIA_QUERY])
      .pipe(map(({ matches }) => matches))
  );

  public checkIsLaptop(): boolean {
    return this._breakpointObserver.isMatched([LAPTOP_MEDIA_QUERY]);
  }
}
