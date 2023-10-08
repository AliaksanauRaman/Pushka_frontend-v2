import { Injectable, inject } from '@angular/core';

import { LOCAL_STORAGE } from '@global/local-storage';

import { LocalStorageKey } from '@shared/enums/local-storage-key.enum';

@Injectable()
export abstract class BaseLocalStorageService<T extends string = string> {
  protected readonly _localStorage = inject(LOCAL_STORAGE);

  protected abstract getKey(): LocalStorageKey;
  public abstract get(): T | null;

  public set(value: T): void {
    this._localStorage.setItem(this.getKey(), value);
  }

  public remove(): void {
    this._localStorage.removeItem(this.getKey());
  }
}
