import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export abstract class BaseDestroyer implements OnDestroy {
  protected readonly _destroy$ = new Subject<void>();

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
