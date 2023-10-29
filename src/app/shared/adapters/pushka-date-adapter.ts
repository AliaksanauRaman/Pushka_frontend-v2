import { Injectable, OnDestroy, inject } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';
import { Store } from '@ngxs/store';
import { tap } from 'rxjs';

import { LocaleServiceFactory } from '@shared/factories/locale-service.factory';

import { SelectedLocalizationState } from '@store/selected-localization';
import { BaseLocaleService } from '@shared/base/base-locale.service';
import { Locale } from '@shared/enums/locale.enum';

@Injectable()
export class PushkaDateAdapter extends NativeDateAdapter implements OnDestroy {
  private readonly _store = inject(Store);
  private readonly _localeServiceFactory = inject(LocaleServiceFactory);
  private _currentLocaleService!: BaseLocaleService;
  private readonly _selectedLocalizationChangesSub = this._store
    .select(SelectedLocalizationState.stream)
    .pipe(tap(({ locale }) => this.setLocale(locale)))
    .subscribe();

  public ngOnDestroy(): void {
    this._selectedLocalizationChangesSub.unsubscribe();
  }

  public override getFirstDayOfWeek(): number {
    return 1;
  }

  public override setLocale(locale: Locale): void {
    super.setLocale(locale);

    this._currentLocaleService = this._localeServiceFactory.build(locale);
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
