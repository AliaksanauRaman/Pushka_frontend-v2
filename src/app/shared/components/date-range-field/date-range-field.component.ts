import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  computed,
  forwardRef,
  inject,
  signal,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {
  NG_VALUE_ACCESSOR,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { map, takeUntil, tap } from 'rxjs';

import { DATE_ADAPTER_PROVIDER } from '@shared/providers/date-adapter';
import { MAT_DATE_FORMATS_PROVIDER } from '@shared/providers/mat-date-formats';
import { IdDirective } from '@shared/directives/id.directive';
import { LabelDirective } from '@shared/directives/label.directive';

import { BaseReactiveFieldDirective } from '@shared/base/base-reactive-field.directive';
import { DateRange } from '@shared/types/date-range';

@Component({
  selector: 'pu-date-range-field',
  templateUrl: './date-range-field.component.html',
  styleUrls: [
    './date-range-field.component.scss',
    '../../../styles/components/_field.component.scss',
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangeFieldComponent),
      multi: true,
    },
    DATE_ADAPTER_PROVIDER,
    MAT_DATE_FORMATS_PROVIDER,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule, MatDatepickerModule],
  hostDirectives: [
    { directive: IdDirective, inputs: ['puId'] },
    { directive: LabelDirective, inputs: ['puLabel'] },
  ],
})
export class DateRangeFieldComponent
  extends BaseReactiveFieldDirective<DateRange>
  implements OnInit
{
  private readonly _formBuilder = inject(NonNullableFormBuilder);
  protected readonly _idDirective = inject(IdDirective);
  protected readonly _labelDirective = inject(LabelDirective);

  @Input()
  public set puStartDatePlaceholder(value: string) {
    this._startDatePlaceholder.set(value);
  }

  @Input()
  public set puEndDatePlaceholder(value: string) {
    this._endDatePlaceholder.set(value);
  }

  @Input()
  public set puMinDate(value: Date) {
    this._minDate.set(value);
  }

  protected readonly _startDatePlaceholder = signal('');
  protected readonly _endDatePlaceholder = signal('');
  protected readonly _minDate = signal(new Date());
  protected readonly _maxDate = computed(
    () => new Date(new Date().setMonth(this._minDate().getMonth() + 3))
  );
  protected readonly _dateRangeForm = this._formBuilder.group({
    start: [null as Date | null],
    end: [null as Date | null],
  });

  public ngOnInit(): void {
    this._dateRangeForm.valueChanges
      .pipe(
        map((formValue) => new DateRange(formValue.start, formValue.end)),
        tap((dateRange) => this.onChange(dateRange.toUTC())),
        takeUntil(this._destroy$)
      )
      .subscribe();
  }

  public writeValue(value: unknown): void {
    if (value !== null && !(value instanceof DateRange)) {
      throw new Error('A null or DateRange is expected!');
    }

    this._dateRangeForm.setValue(
      {
        start: value?.start || null,
        end: value?.end || null,
      },
      { emitEvent: false }
    );
  }
}
