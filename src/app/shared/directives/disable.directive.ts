import { Directive, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  host: {
    '[disable]': 'disable',
  },
  standalone: true,
})
export class DisableDirective {
  private _isDisabled = false;

  @Input()
  public set disable(value: BooleanInput) {
    this._isDisabled = coerceBooleanProperty(value);
  }

  public get disable(): boolean {
    return this._isDisabled;
  }
}
