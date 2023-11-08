import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  signal,
} from '@angular/core';
import { NgIf } from '@angular/common';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'pu-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf],
})
export class FieldErrorsComponent {
  @Input()
  public set areErrorsVisible(value: boolean) {
    this._areErrorsVisible.set(value);
  }

  @Input()
  public set errors(value: ValidationErrors | null) {
    this._errors.set(value);
  }

  @Input()
  public set errorsMappings(value: Record<string, string>) {
    this._errorsMappings.set(value);
  }

  protected readonly _areErrorsVisible = signal(true);
  protected readonly _errors = signal<ValidationErrors | null>(null);
  protected readonly _errorsMappings = signal<Record<string, string>>({});
  protected readonly _errorMessage = computed(() => {
    const errors = this._errors();

    if (errors === null) {
      return '';
    }

    const errorName = Object.keys(errors).find(
      (errorName) => !!errors[errorName]
    );

    if (errorName === undefined) {
      return '';
    }

    const errorMessage = this._errorsMappings()[errorName];

    if (errorMessage === undefined) {
      throw new Error(`Mapping for error '${errorName}' is missing!`);
    }

    return errorMessage;
  });
}
