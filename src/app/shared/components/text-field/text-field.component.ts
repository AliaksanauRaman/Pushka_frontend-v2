import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { FieldErrorsComponent } from '@shared/components/field-errors/field-errors.component';
import { IdDirective } from '@shared/directives/id.directive';
import { LabelDirective } from '@shared/directives/label.directive';
import { PlaceholderDirective } from '@shared/directives/placeholder.directive';
import { BaseTextFieldDirective } from '@shared/base/base-text-field.directive';

@Component({
  selector: 'pu-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: [
    './text-field.component.scss',
    '../../../styles/components/_field.component.scss',
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FieldErrorsComponent],
  hostDirectives: [
    { directive: IdDirective, inputs: ['puId'] },
    { directive: LabelDirective, inputs: ['puLabel'] },
    { directive: PlaceholderDirective, inputs: ['puPlaceholder'] },
  ],
})
export class TextFieldComponent extends BaseTextFieldDirective {}
