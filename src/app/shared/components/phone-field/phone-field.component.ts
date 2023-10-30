import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  inject,
  signal,
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { map, filter, tap, takeUntil } from 'rxjs';

import { CountryCodeFieldComponent } from '../country-code-field/country-code-field.component';
import { FieldErrorsComponent } from '@shared/components/field-errors/field-errors.component';
import { IdDirective } from '@shared/directives/id.directive';
import { LabelDirective } from '@shared/directives/label.directive';
import { PlaceholderDirective } from '@shared/directives/placeholder.directive';

import { BaseReactiveFieldWithErrorsDirective } from '@shared/base/base-reactive-field-with-errors.directive';
import { Phone } from '@shared/types/phone';
import { PhoneFormValue } from '@shared/types/phone-form-value';

@Component({
  selector: 'pu-phone-field',
  templateUrl: './phone-field.component.html',
  styleUrls: [
    './phone-field.component.scss',
    '../../../styles/components/_field.component.scss',
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneFieldComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CountryCodeFieldComponent,
    FieldErrorsComponent,
  ],
  hostDirectives: [
    { directive: IdDirective, inputs: ['puId'] },
    { directive: LabelDirective, inputs: ['puLabel'] },
    { directive: PlaceholderDirective, inputs: ['puPlaceholder'] },
  ],
})
export class PhoneFieldComponent extends BaseReactiveFieldWithErrorsDirective<Phone | null> {
  private readonly _formBuilder = inject(NonNullableFormBuilder);

  protected readonly _idDirective = inject(IdDirective);
  protected readonly _labelDirective = inject(LabelDirective);
  protected readonly _placeholderDirective = inject(PlaceholderDirective);
  protected readonly _phoneForm = this._formBuilder.group({
    countryCode: [''],
    number: [''],
  });
  protected readonly _value = signal<Phone | null>(null);

  public ngOnInit(): void {
    this._phoneForm.valueChanges
      .pipe(
        map((rawFormValue) => new PhoneFormValue(rawFormValue)),
        map((formValue) => formValue.toPhone()),
        filter((phone) => this.checkIsNewValue(phone)),
        tap((phone) => {
          this._value.set(phone);
          this.onChange(phone);
        }),
        takeUntil(this._destroy$)
      )
      .subscribe();
  }

  public override writeValue(value: unknown): void {
    if (value !== null && !Phone.is(value)) {
      throw new Error('A null or Phone value is expected!');
    }

    if (value === null) {
      this.writeNull();
      return;
    }

    this.writePhone(value);
  }

  private writeNull(): void {
    this._value.set(null);
    this._phoneForm.setValue(PhoneFormValue.empty().toMap(), {
      emitEvent: false,
    });
  }

  private writePhone(phone: Phone): void {
    this._value.set(phone);
    this._phoneForm.setValue(phone.toMap(), {
      emitEvent: false,
    });
  }

  private checkIsNewValue(value: Phone): boolean {
    const currentValue = this._value();
    return currentValue === null || !currentValue.equalsTo(value);
  }
}
