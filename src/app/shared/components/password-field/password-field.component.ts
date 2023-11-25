import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  signal,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { IdDirective } from '@shared/directives/id.directive';
import { LabelDirective } from '@shared/directives/label.directive';
import { PlaceholderDirective } from '@shared/directives/placeholder.directive';
import { AutocompleteDirective } from '@shared/directives/autocomplete.directive';

import { BaseTextFieldDirective } from '@shared/base/base-text-field.directive';

type PasswordFieldType = 'password' | 'text';

@Component({
  selector: 'pu-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: [
    '../../../styles/components/_field.component.scss',
    './password-field.component.scss',
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordFieldComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  hostDirectives: [
    { directive: IdDirective, inputs: ['puId'] },
    { directive: LabelDirective, inputs: ['puLabel'] },
    { directive: PlaceholderDirective, inputs: ['puPlaceholder'] },
    { directive: AutocompleteDirective, inputs: ['puAutocomplete'] },
  ],
})
export class PasswordFieldComponent extends BaseTextFieldDirective {
  protected readonly _isPasswordVisible = signal(false);

  protected readonly _fieldType = computed<PasswordFieldType>(() =>
    this._isPasswordVisible() ? 'text' : 'password'
  );
  protected readonly _toggleVisibilityButtonAriaLabel = computed(() =>
    this._isPasswordVisible() ? 'Hide password' : 'Show password'
  );

  protected toggleVisibility(): void {
    this._isPasswordVisible.update((prev) => !prev);
  }
}
