import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  forwardRef,
  inject,
  signal,
} from '@angular/core';
import { NgFor } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  CdkListboxModule,
  ListboxValueChangeEvent,
} from '@angular/cdk/listbox';
import { z } from 'zod';

import { AriaLabelDirective } from '@shared/directives/aria-label.directive';
import { PlaceholderDirective } from '@shared/directives/placeholder.directive';

import { COUNTRY_CODES } from './country-code-field.config';
import { BaseDropdownFieldDirective } from '@shared/base/base-dropdown-field.directive';

@Component({
  selector: 'pu-country-code-field',
  templateUrl: './country-code-field.component.html',
  styleUrls: ['./country-code-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountryCodeFieldComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, OverlayModule, CdkListboxModule],
  hostDirectives: [
    { directive: AriaLabelDirective, inputs: ['puAriaLabel'] },
    { directive: PlaceholderDirective, inputs: ['puPlaceholder'] },
  ],
})
export class CountryCodeFieldComponent
  extends BaseDropdownFieldDirective<string>
  implements OnInit
{
  protected readonly _countryCodes = inject(COUNTRY_CODES);
  protected readonly _ariaLabelDirective = inject(AriaLabelDirective);
  protected readonly _value = signal('');

  public override writeValue(value: unknown): void {
    this._value.set(z.string().parse(value));
  }

  public ngOnInit(): void {
    this._placeholderDirective.puPlaceholder = '+XXX';
  }

  protected handleListboxValueChange(
    event: ListboxValueChangeEvent<unknown>
  ): void {
    const selectedValue = z.string().parse(event.value[0]);

    if (this.checkIsNewValue(selectedValue)) {
      this._value.set(selectedValue);
      this.onChange(selectedValue);
    }

    this.closePanel();
  }

  private checkIsNewValue(value: string): boolean {
    return this._value() !== value;
  }
}
