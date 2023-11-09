import { Directive, HostBinding, signal } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

import { BaseDestroyer } from '@shared/base/base-destroyer';

@Directive()
export abstract class BaseReactiveFieldDirective<T>
  extends BaseDestroyer
  implements ControlValueAccessor
{
  @HostBinding('class.pu-disabled')
  public get hasPuDisabledClass(): boolean {
    return this._isDisabled();
  }

  protected readonly _isDisabled = signal(false);
  protected _isTouched = false;

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

  protected touchField(): void {
    if (this._isTouched) {
      return;
    }

    this._isTouched = true;
    this.onTouched();
  }

  protected onChange(value: T): void {}
  protected onTouched(): void {}
}
