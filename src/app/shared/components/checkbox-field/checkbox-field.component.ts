import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  inject,
  signal,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { z } from 'zod';

import { DisabledDirective } from '@shared/directives/disabled.directive';
import { IdDirective } from '@shared/directives/id.directive';
import { LabelDirective } from '@shared/directives/label.directive';

import { BaseReactiveFieldDirective } from '@shared/base/base-reactive-field.directive';

@Component({
  selector: 'pu-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxFieldComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DisabledDirective],
  hostDirectives: [
    { directive: IdDirective, inputs: ['puId'] },
    { directive: LabelDirective, inputs: ['puLabel'] },
  ],
})
export class CheckboxFieldComponent extends BaseReactiveFieldDirective<boolean> {
  protected readonly _idDirective = inject(IdDirective);
  protected readonly _labelDirective = inject(LabelDirective);
  protected readonly _isChecked = signal(false);

  public override writeValue(value: unknown): void {
    this._isChecked.set(z.boolean().parse(value));
  }

  protected toggleIsChecked(): void {
    this._isChecked.update((isChecked) => !isChecked);
    this.onChange(this._isChecked());
  }
}
