import {
  ChangeDetectionStrategy,
  Component,
  Input,
  forwardRef,
  inject,
  signal,
} from '@angular/core';
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
import { IdDirective } from '@shared/directives/id.directive';
import { LabelDirective } from '@shared/directives/label.directive';

import { BaseReactiveField } from '@shared/base/base-reactive-field';
import { mapDateToUTCDate } from '@shared/utils/map-date-to-utc-date';

@Component({
  selector: 'pu-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
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
  imports: [ReactiveFormsModule, MatDatepickerModule],
  hostDirectives: [
    { directive: IdDirective, inputs: ['puId'] },
    { directive: LabelDirective, inputs: ['puLabel'] },
  ],
})
// TODO: Not used
export class DateFieldComponent extends BaseReactiveField<Date | null> {
  @Input()
  public set puMinDate(value: Date | null) {
    this._minDate.set(value);
  }

  protected readonly _idDirective = inject(IdDirective);
  protected readonly _labelDirective = inject(LabelDirective);
  protected readonly _minDate = signal<Date | null>(null);
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

  protected reset(): void {
    this._inputField.setValue(null);
    this.onChange(null);
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
