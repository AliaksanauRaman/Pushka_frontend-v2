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
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { z } from 'zod';

import { AriaLabelDirective } from '@shared/directives/aria-label.directive';
import { PlaceholderDirective } from '@shared/directives/placeholder.directive';

import { COUNTRY_CODES } from './country-code-field.config';
import { BaseReactiveFieldDirective } from '@shared/base/base-reactive-field.directive';

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
  imports: [NgFor, CdkMenu, CdkMenuItem, CdkMenuTrigger],
  hostDirectives: [
    { directive: AriaLabelDirective, inputs: ['puAriaLabel'] },
    { directive: PlaceholderDirective, inputs: ['puPlaceholder'] },
  ],
})
export class CountryCodeFieldComponent
  extends BaseReactiveFieldDirective<string>
  implements OnInit
{
  protected readonly _countryCodes = inject(COUNTRY_CODES);
  protected readonly _ariaLabelDirective = inject(AriaLabelDirective);
  protected readonly _placeholderDirective = inject(PlaceholderDirective);
  protected readonly _value = signal('');

  public override writeValue(value: unknown): void {
    this._value.set(z.string().parse(value));
  }

  public ngOnInit(): void {
    this._placeholderDirective.puPlaceholder = '+XXX';
  }

  protected trackByCountryCode(_: number, countryCode: string): string {
    return countryCode;
  }

  protected handleCountryCodeSelect(countryCode: string): void {
    if (!this.checkIsNewValue(countryCode)) {
      return;
    }

    this._value.set(countryCode);
    this.onChange(countryCode);
  }

  private checkIsNewValue(value: string): boolean {
    return this._value() !== value;
  }
}
