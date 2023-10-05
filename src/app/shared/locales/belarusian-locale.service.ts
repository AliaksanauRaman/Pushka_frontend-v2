import { Injectable } from '@angular/core';

import { BaseLocaleService } from '@shared/base/base-locale.service';

const MONTH_NAMES = [
  'Студзень',
  'Люты',
  'Сакавік',
  'Красавік',
  'Травень',
  'Чэрвень',
  'Ліпень',
  'Жнівень',
  'Верасень',
  'Кастрычнік',
  'Лістапад',
  'Снежань',
];

const CAPS_MONTH_NAMES = MONTH_NAMES.map((name) => name.toUpperCase());

const DAY_OF_WEEK_NAMES = [
  'Нядзеля',
  'Панядзелак',
  'Аўторак',
  'Серада',
  'Чацвер',
  'Пятніца',
  'Субота',
];

const CAPS_DAY_OF_WEEK_NAMES = DAY_OF_WEEK_NAMES.map((name) =>
  name.toUpperCase()
);

@Injectable({
  providedIn: 'root',
})
export class BelarusianLocaleService extends BaseLocaleService {
  public override getMonthNames(isCaps: boolean): Array<string> {
    return isCaps ? CAPS_MONTH_NAMES : MONTH_NAMES;
  }

  public override getDayOfWeekNames(isCaps: boolean): Array<string> {
    return isCaps ? CAPS_DAY_OF_WEEK_NAMES : DAY_OF_WEEK_NAMES;
  }
}
