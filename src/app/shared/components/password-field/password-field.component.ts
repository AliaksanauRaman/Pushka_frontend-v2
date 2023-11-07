import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  signal,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { IdDirective } from '@shared/directives/id.directive';
import { LabelDirective } from '@shared/directives/label.directive';
import { PlaceholderDirective } from '@shared/directives/placeholder.directive';
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
  imports: [NgOptimizedImage],
  hostDirectives: [
    { directive: IdDirective, inputs: ['puId'] },
    { directive: LabelDirective, inputs: ['puLabel'] },
    { directive: PlaceholderDirective, inputs: ['puPlaceholder'] },
  ],
})
export class PasswordFieldComponent extends BaseTextFieldDirective {
  protected readonly _fieldType = signal<PasswordFieldType>('password');

  protected readonly _lockIconSrc = computed(() =>
    this._fieldType() === 'password'
      ? '/assets/icons/lock.svg'
      : '/assets/icons/lock-open.svg'
  );
  protected readonly _lockIconAlt = computed(() =>
    this._fieldType() === 'password' ? 'Lock' : 'Lock open'
  );
  protected readonly _eyeIconSrc = computed(() =>
    this._fieldType() === 'password'
      ? '/assets/icons/eye.svg'
      : '/assets/icons/eye-off.svg'
  );
  protected readonly _eyeIconAlt = computed(() =>
    this._fieldType() === 'password' ? 'Eye' : 'Eye off'
  );

  protected toggleVisibility(): void {
    this._fieldType.update((prev) =>
      prev === 'password' ? 'text' : 'password'
    );
  }
}
