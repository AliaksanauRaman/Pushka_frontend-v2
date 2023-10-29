import { Injectable, inject } from '@angular/core';

import { DATE_FORMAT } from '@shared/dependencies/date-format';

const SUPPORTED_DATE_FORMATS: ReadonlyArray<string> = [
  'LL',
  'MMM',
  'MMM YYYY',
  'MMMM YYYY',
];

@Injectable()
export abstract class BaseLocaleService {
  private readonly _dateFormat = inject(DATE_FORMAT);

  public abstract getMonthNames(isCaps: boolean): Array<string>;
  public abstract getDayOfWeekNames(isCaps: boolean): Array<string>;

  public getLongMonthNames(isCaps = false): Array<string> {
    return this.getMonthNames(isCaps);
  }

  public getShortMonthNames(isCaps = false): Array<string> {
    return this.getLongMonthNames(isCaps).map(
      (name) => `${this.getOneShortMonthName(name)}`
    );
  }

  public getOneShortMonthName(longName: string): string {
    return longName.slice(0, 3);
  }

  public getNarrowMonthNames(isCaps = false): Array<string> {
    return this.getShortMonthNames(isCaps);
  }

  public getLongDayOfWeekNames(isCaps = false): Array<string> {
    return this.getDayOfWeekNames(isCaps);
  }

  public getShortDayOfWeekNames(isCaps = false): Array<string> {
    return this.getLongDayOfWeekNames(isCaps).map((name) => name.slice(0, 2));
  }

  public getNarrowDayOfWeekNames(isCaps = false): Array<string> {
    return this.getLongDayOfWeekNames(isCaps).map((name) => name.slice(0, 1));
  }

  public formatDate(date: Date, dateFormat: string): string {
    if (!this.checkIsSupportedDateFormat(dateFormat)) {
      throw new Error(`Unknown date format: '${dateFormat}'!`);
    }

    if (dateFormat === this._dateFormat) {
      return this.formatNormalDate(date);
    }

    if (dateFormat === 'MMM') {
      return this.formatMMMDate(date);
    }

    if (dateFormat === 'MMM YYYY') {
      return this.formatMMM_YYYYDate(date);
    }

    if (dateFormat === 'MMMM YYYY') {
      return this.formatMMMM_YYYYDate(date);
    }

    return this.formatLLDate(date);
  }

  protected formatNormalDate(date: Date): string {
    return this._dateFormat
      .replace('DD', this.to2digit(date.getDate()))
      .replace('MM', this.to2digit(date.getMonth() + 1))
      .replace('YYYY', date.getFullYear().toString());
  }

  protected formatMMMDate(date: Date): string {
    return this.getLongMonthNames(true)[date.getMonth()];
  }

  protected formatMMM_YYYYDate(date: Date): string {
    const monthName = this.getLongMonthNames(true)[date.getMonth()];
    return `${this.getOneShortMonthName(monthName)} ${date.getFullYear()}`;
  }

  protected formatMMMM_YYYYDate(date: Date): string {
    const monthName = this.getLongMonthNames()[date.getMonth()];
    return `${monthName} ${date.getFullYear()}`;
  }

  protected formatLLDate(date: Date): string {
    const monthName = this.getLongMonthNames()[date.getMonth()];
    return `${monthName} ${date.getDate()}, ${date.getFullYear()}`;
  }

  private checkIsSupportedDateFormat(dateFormat: string): boolean {
    return (
      dateFormat === this._dateFormat ||
      SUPPORTED_DATE_FORMATS.includes(dateFormat)
    );
  }

  private to2digit(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }
}
