import { Injectable, inject } from '@angular/core';

import { NAVIGATOR } from '@global/navigator';

@Injectable()
export abstract class BaseBrowserService<T> {
  protected readonly _navigator = inject(NAVIGATOR);

  public abstract get(): T;
}
