import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Input,
  forwardRef,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  NG_VALUE_ACCESSOR,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { map, filter, tap } from 'rxjs';

import { CountryCodeFieldComponent } from '@shared/components/country-code-field/country-code-field.component';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';
import { IdDirective } from '@shared/directives/id.directive';
import { LabelDirective } from '@shared/directives/label.directive';

import { BaseReactiveFieldDirective } from '@shared/base/base-reactive-field.directive';
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
    IconButtonComponent,
  ],
  hostDirectives: [
    { directive: IdDirective, inputs: ['puId'] },
    { directive: LabelDirective, inputs: ['puLabel'] },
  ],
})
export class PhoneFieldComponent extends BaseReactiveFieldDirective<Phone | null> {
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _formBuilder = inject(NonNullableFormBuilder);
  protected readonly _idDirective = inject(IdDirective);
  protected readonly _labelDirective = inject(LabelDirective);

  @Input()
  public set puCountryCodePlaceholder(value: string) {
    this._countryCodePlaceholder.set(value);
  }

  @Input()
  public set puNumberPlaceholder(value: string) {
    this._numberPlaceholder.set(value);
  }

  protected readonly _phoneForm = this._formBuilder.group({
    countryCode: [''],
    number: [''],
  });
  protected readonly _value = signal<Phone | null>(null);
  protected readonly _countryCodePlaceholder = signal('');
  protected readonly _numberPlaceholder = signal('');
  protected _countryCodeIsTouched = false;
  protected _numberIsTouched = false;

  public ngOnInit(): void {
    this._phoneForm.valueChanges
      .pipe(
        map((rawFormValue) => new PhoneFormValue(rawFormValue)),
        map((formValue) => formValue.toPhone()),
        filter((phone) => this.checkIsNewValue(phone)),
        tap((phone) => {
          if (phone.isEmpty) {
            this.clearPhone();
            return;
          }

          this._value.set(phone);
          this.onChange(phone);
        }),
        takeUntilDestroyed(this._destroyRef)
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

  public override setDisabledState(isDisabled: boolean): void {
    super.setDisabledState(isDisabled);

    if (isDisabled) {
      this._phoneForm.disable();
    } else {
      this._phoneForm.enable();
    }
  }

  protected handleCountryCodeTouch(): void {
    if (this._isTouched) {
      return;
    }

    this._countryCodeIsTouched = true;

    if (this.checkIsShouldBeTouched()) {
      this.touchField();
    }
  }

  protected handleNumberFieldBlur(): void {
    if (this._isTouched) {
      return;
    }

    this._numberIsTouched = true;

    if (this.checkIsShouldBeTouched()) {
      this.touchField();
    }
  }

  protected clearPhone(): void {
    this._phoneForm.setValue(
      {
        countryCode: '',
        number: '',
      },
      { emitEvent: false }
    );
    this._value.set(null);
    this.onChange(null);
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

  private checkIsShouldBeTouched(): boolean {
    return this._countryCodeIsTouched && this._numberIsTouched;
  }
}
