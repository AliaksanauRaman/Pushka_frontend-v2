import { Injectable } from '@angular/core';

import { BaseLocaleService } from '@shared/base/base-locale.service';

const MONTH_NAMES = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const CAPS_MONTH_NAMES = MONTH_NAMES.map((name) => name.toUpperCase());

const DAY_OF_WEEK_NAMES = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const CAPS_DAY_OF_WEEK_NAMES = DAY_OF_WEEK_NAMES.map((name) =>
  name.toUpperCase()
);

@Injectable({
  providedIn: 'root',
})
export class RussianLocaleService extends BaseLocaleService {
  public override getMonthNames(isCaps: boolean): Array<string> {
    return isCaps ? CAPS_MONTH_NAMES : MONTH_NAMES;
  }

  public override getDayOfWeekNames(isCaps: boolean): Array<string> {
    return isCaps ? CAPS_DAY_OF_WEEK_NAMES : DAY_OF_WEEK_NAMES;
  }
}
