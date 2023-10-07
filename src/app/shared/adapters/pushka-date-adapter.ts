import { Injectable, inject } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';
import { Store } from '@ngxs/store';

import { LocaleServiceFactory } from '@shared/factories/locale-service.factory';

import { LocalizationsState } from '@store/localizations';

@Injectable()
export class PushkaDateAdapter extends NativeDateAdapter {
  private readonly _store = inject(Store);
  private readonly _localeServiceFactory = inject(LocaleServiceFactory);
  private readonly _currentLocaleService = this._localeServiceFactory.build(
    this._store.selectSnapshot(LocalizationsState.stream).locale
  );

  public override getFirstDayOfWeek(): number {
    return 1;
  }

  public override getMonthNames(
    style: 'long' | 'short' | 'narrow'
  ): Array<string> {
    if (style === 'long') {
      return this._currentLocaleService.getLongMonthNames();
    }

    if (style === 'short') {
      return this._currentLocaleService.getShortMonthNames();
    }

    return this._currentLocaleService.getNarrowMonthNames();
  }

  public override getDayOfWeekNames(
    style: 'long' | 'short' | 'narrow'
  ): Array<string> {
    if (style === 'long') {
      return this._currentLocaleService.getLongDayOfWeekNames();
    }

    if (style === 'short') {
      return this._currentLocaleService.getShortDayOfWeekNames();
    }

    return this._currentLocaleService.getNarrowDayOfWeekNames();
  }

  public override format(date: Date, displayFormat: string): string {
    return this._currentLocaleService.formatDate(date, displayFormat);
  }
}
