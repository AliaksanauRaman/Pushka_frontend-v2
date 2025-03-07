import { Directive, Input, inject, signal } from '@angular/core';
import { z } from 'zod';

import { IdDirective } from '@shared/directives/id.directive';
import { LabelDirective } from '@shared/directives/label.directive';
import { PlaceholderDirective } from '@shared/directives/placeholder.directive';
import { AutocompleteDirective } from '@shared/directives/autocomplete.directive';

import { BaseReactiveFieldDirective } from './base-reactive-field.directive';

@Directive()
export abstract class BaseTextFieldDirective extends BaseReactiveFieldDirective<string> {
  protected readonly _idDirective = inject(IdDirective);
  protected readonly _labelDirective = inject(LabelDirective);
  protected readonly _placeholderDirective = inject(PlaceholderDirective);
  protected readonly _autocomplete = inject(AutocompleteDirective);

  @Input()
  public set puMaxLength(value: number) {
    this._maxLength.set(value);
  }

  protected readonly _maxLength = signal(30);
  protected readonly _value = signal('');

  public override writeValue(value: unknown): void {
    this._value.set(z.string().parse(value));
  }

  protected handleFieldInput(value: string): void {
    if (!this.checkIsNewValue(value)) {
      return;
    }

    this._value.set(value);
    this.onChange(value);
  }

  protected handleFieldBlur(): void {
    this.touchField();
  }

  protected checkIsNewValue(value: string): boolean {
    return this._value() !== value;
  }
}
