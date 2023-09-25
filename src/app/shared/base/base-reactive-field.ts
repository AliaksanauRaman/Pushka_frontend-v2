import { signal } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

import { BaseDestroyer } from '@shared/base/base-destroyer';

export abstract class BaseReactiveField<T>
  extends BaseDestroyer
  implements ControlValueAccessor
{
  protected readonly _isDisabled = signal(false);

  public abstract writeValue(value: unknown): void;

  public registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this._isDisabled.set(isDisabled);
  }

  protected onChange(value: T): void {}
  protected onTouched(): void {}
}
