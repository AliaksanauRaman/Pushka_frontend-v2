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
import { BaseTextFieldDirective } from '@shared/base/base-text-field.directive';

type PasswordFieldType = 'password' | 'text';

@Component({
  selector: 'pu-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss'],
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
  ],
})
export class PasswordFieldComponent extends BaseTextFieldDirective {
  protected readonly _fieldType = signal<PasswordFieldType>('password');

  // TODO: Temporary, until there are no icons
  protected readonly _buttonLabel = computed(() =>
    this._fieldType() === 'password' ? 'Show' : 'Hide'
  );

  protected toggleVisibility(): void {
    this._fieldType.update((prev) =>
      prev === 'password' ? 'text' : 'password'
    );
  }
}
