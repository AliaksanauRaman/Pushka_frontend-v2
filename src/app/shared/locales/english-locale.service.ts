import { Injectable } from '@angular/core';

import { BaseLocaleService } from '@shared/base/base-locale.service';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const CAPS_MONTH_NAMES = MONTH_NAMES.map((name) => name.toUpperCase());

const DAY_OF_WEEK_NAMES = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const CAPS_DAY_OF_WEEK_NAMES = DAY_OF_WEEK_NAMES.map((name) =>
  name.toUpperCase()
);

@Injectable({
  providedIn: 'root',
})
export class EnglishLocaleService extends BaseLocaleService {
  public override getMonthNames(isCaps: boolean): Array<string> {
    return isCaps ? CAPS_MONTH_NAMES : MONTH_NAMES;
  }

  public override getDayOfWeekNames(isCaps: boolean): Array<string> {
    return isCaps ? CAPS_DAY_OF_WEEK_NAMES : DAY_OF_WEEK_NAMES;
  }

  public override formatMMM_YYYYDate(date: Date): string {
    return `${this.formatMMMDate(date)} ${date.getFullYear()}`;
  }
}
