import { ChangeDetectionStrategy, Component, Input, forwardRef, signal } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { IdDirective } from '@shared/directives/id.directive';
import { LabelDirective } from '@shared/directives/label.directive';
import { PlaceholderDirective } from '@shared/directives/placeholder.directive';
import { AutocompleteDirective } from '@shared/directives/autocomplete.directive';

import { BaseTextFieldDirective } from '@shared/base/base-text-field.directive';

@Component({
  selector: 'pu-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: [
    '../../../styles/components/_field.component.scss',
    './text-field.component.scss',
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
  hostDirectives: [
    { directive: IdDirective, inputs: ['puId'] },
    { directive: LabelDirective, inputs: ['puLabel'] },
    { directive: PlaceholderDirective, inputs: ['puPlaceholder'] },
    { directive: AutocompleteDirective, inputs: ['puAutocomplete'] },
  ],
})
export class TextFieldComponent extends BaseTextFieldDirective {}
