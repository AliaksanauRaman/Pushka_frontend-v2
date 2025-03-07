import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { IdDirective } from '@shared/directives/id.directive';
import { LabelDirective } from '@shared/directives/label.directive';
import { PlaceholderDirective } from '@shared/directives/placeholder.directive';
import { AutocompleteDirective } from '@shared/directives/autocomplete.directive';

import { BaseTextFieldDirective } from '@shared/base/base-text-field.directive';

@Component({
  selector: 'pu-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: [
    './textarea-field.component.scss',
    '../../../styles/components/_field.component.scss',
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaFieldComponent),
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
export class TextareaFieldComponent extends BaseTextFieldDirective {}
