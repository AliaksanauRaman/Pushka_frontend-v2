import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { IdDirective } from '@shared/directives/id.directive';
import { LabelDirective } from '@shared/directives/label.directive';
import { PlaceholderDirective } from '@shared/directives/placeholder.directive';
import { AutocompleteDirective } from '@shared/directives/autocomplete.directive';

import { BaseTextFieldDirective } from '@shared/base/base-text-field.directive';
import { IFocusableField } from '@shared/interfaces/focusable-field';

@Component({
  selector: 'pu-email-field',
  templateUrl: './email-field.component.html',
  styleUrls: [
    '../../../styles/components/_field.component.scss',
    './email-field.component.scss',
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailFieldComponent),
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
export class EmailFieldComponent
  extends BaseTextFieldDirective
  implements IFocusableField
{
  @ViewChild('fieldRef')
  private readonly _fieldRef!: ElementRef<HTMLInputElement>;

  public focus(): void {
    this._fieldRef.nativeElement.focus();
  }
}
