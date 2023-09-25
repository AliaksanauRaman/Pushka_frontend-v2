import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';

import { BaseTextFieldDirective } from '@shared/base/base-text-field.directive';

@Component({
  selector: 'pu-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaFieldComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TextareaFieldComponent extends BaseTextFieldDirective {}
