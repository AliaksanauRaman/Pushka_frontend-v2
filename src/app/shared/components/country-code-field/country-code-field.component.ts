import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  forwardRef,
  inject,
  signal,
} from '@angular/core';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { TranslateModule } from '@ngx-translate/core';
import { z } from 'zod';

import { AriaLabelDirective } from '@shared/directives/aria-label.directive';
import { PlaceholderDirective } from '@shared/directives/placeholder.directive';

import { COUNTRY_CODES } from './country-code-field.config';
import { BaseReactiveFieldDirective } from '@shared/base/base-reactive-field.directive';
import { CountryCode } from '@shared/types/country-code';

@Component({
  selector: 'pu-country-code-field',
  templateUrl: './country-code-field.component.html',
  styleUrls: [
    '../../../styles/components/_field.component.scss',
    './country-code-field.component.scss',
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountryCodeFieldComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgFor,
    NgOptimizedImage,
    CdkMenu,
    CdkMenuItem,
    CdkMenuTrigger,
    TranslateModule,
  ],
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
  protected readonly _value = signal<CountryCode | null>(null);
  protected readonly _viewValue = computed(() => {
    const countryCode = this._value();

    if (countryCode === null) {
      return '';
    }

    return countryCode.value;
  });

  public override writeValue(value: unknown): void {
    const countryCodeValue = z.string().parse(value);

    if (countryCodeValue === '') {
      this._value.set(null);
      return;
    }

    const countryCode = this._countryCodes.find(
      ({ value }) => value === countryCodeValue
    );

    if (countryCode === undefined) {
      throw new Error(`No such country code: '${countryCodeValue}'!`);
    }

    this._value.set(countryCode);
  }

  public ngOnInit(): void {
    this._placeholderDirective.puPlaceholder = '+XXX';
  }

  protected trackByCountryCode(_: number, countryCode: CountryCode): string {
    return countryCode.value;
  }

  protected handleCountryCodeSelect(countryCode: CountryCode): void {
    if (this.checkIsOldValue(countryCode)) {
      return;
    }

    this._value.set(countryCode);
    this.onChange(countryCode.value);
  }

  private checkIsOldValue(value: CountryCode): boolean {
    const currentValue = this._value();

    if (currentValue === null) {
      return false;
    }

    return currentValue.equalsTo(value);
  }
}
