import { Directive, Input, computed, signal } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { BaseReactiveField } from './base-reactive-field';

@Directive()
export abstract class BaseReactiveFieldWithErrorsDirective<
  T
> extends BaseReactiveField<T> {
  @Input()
  public set errors(value: ValidationErrors | null) {
    this._errors.set(value);
  }

  @Input()
  public set errorsMappings(value: Record<string, string>) {
    this._errorsMappings.set(value);
  }

  protected readonly _errors = signal<ValidationErrors | null>(null);
  protected readonly _errorsMappings = signal<Record<string, string>>({});
  protected readonly _errorMessage = computed(() => {
    if (!this._isTouched()) {
      return '';
    }

    const errors = this._errors();

    if (errors === null) {
      return '';
    }

    const errorsMappings = this._errorsMappings();
    const errorName = Object.keys(errors).find(
      (errorName) => !!errors[errorName]
    );

    if (errorName === undefined) {
      return '';
    }

    const errorMessage = errorsMappings[errorName];

    if (errorMessage === undefined) {
      throw new Error(`Mapping for error '${errorName}' is missing!`);
    }

    return errorMessage;
  });
}
