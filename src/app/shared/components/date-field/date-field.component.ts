import {
  ChangeDetectionStrategy,
  Component,
  Input,
  forwardRef,
  inject,
  signal,
  computed,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {
  FormControl,
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  MatDatepickerInputEvent,
  MatDatepickerModule,
} from '@angular/material/datepicker';

import { DATE_ADAPTER_PROVIDER } from '@shared/providers/date-adapter';
import { MAT_DATE_FORMATS_PROVIDER } from '@shared/providers/mat-date-formats';

import { DisabledDirective } from '@shared/directives/disabled.directive';
import { IdDirective } from '@shared/directives/id.directive';
import { LabelDirective } from '@shared/directives/label.directive';
import { PlaceholderDirective } from '@shared/directives/placeholder.directive';

import { BaseReactiveFieldDirective } from '@shared/base/base-reactive-field.directive';
import { mapDateToUTCDate } from '@shared/utils/map-date-to-utc-date';

@Component({
  selector: 'pu-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: [
    '../../../styles/components/_field.component.scss',
    './date-field.component.scss',
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateFieldComponent),
      multi: true,
    },
    DATE_ADAPTER_PROVIDER,
    MAT_DATE_FORMATS_PROVIDER,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule,
    MatDatepickerModule,
    DisabledDirective,
  ],
  hostDirectives: [
    { directive: IdDirective, inputs: ['puId'] },
    { directive: LabelDirective, inputs: ['puLabel'] },
    { directive: PlaceholderDirective, inputs: ['puPlaceholder'] },
  ],
})
export class DateFieldComponent extends BaseReactiveFieldDirective<Date | null> {
  @Input()
  public set puMinDate(value: Date | null) {
    this._minDate.set(value);
  }

  protected readonly _idDirective = inject(IdDirective);
  protected readonly _labelDirective = inject(LabelDirective);
  protected readonly _placeholderDirective = inject(PlaceholderDirective);
  protected readonly _minDate = signal<Date | null>(new Date());
  protected readonly _maxDate = computed(
    () => new Date(new Date().setMonth(new Date().getMonth() + 3))
  );
  protected readonly _inputField = new FormControl<Date | null>(null);

  public override writeValue(value: unknown): void {
    if (value !== null && !this.checkIsDate(value)) {
      throw new Error('A Date or null is expected!');
    }

    if (value === null) {
      this.writeNull();
      return;
    }

    this.writeDate(value);
  }

  protected handleDateChange(event: MatDatepickerInputEvent<unknown>): void {
    const selectedDate = event.value;

    if (!this.checkIsDate(selectedDate)) {
      throw new Error('A Date is expected!');
    }

    this.onChange(mapDateToUTCDate(selectedDate));
  }

  private writeNull(): void {
    this._inputField.setValue(null);
  }

  private writeDate(date: Date): void {
    this._inputField.setValue(mapDateToUTCDate(date));
  }

  private checkIsDate(value: unknown): value is Date {
    return value instanceof Date;
  }
}
