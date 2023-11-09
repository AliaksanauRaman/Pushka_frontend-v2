import { Directive, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: '[puDisabled]',
  host: {
    '[disabled]': 'disabled',
  },
  standalone: true,
})
export class DisabledDirective {
  private _isDisabled = false;

  @Input()
  public set disabled(value: BooleanInput) {
    this._isDisabled = coerceBooleanProperty(value);
  }

  public get disabled(): boolean {
    return this._isDisabled;
  }
}
