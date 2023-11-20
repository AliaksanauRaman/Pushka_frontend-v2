import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Select } from '@ngxs/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject, takeUntil, tap } from 'rxjs';

import { SelectedLocalizationState } from '@store/selected-localization';
import { Localization } from '@shared/types/localization';

@Injectable()
export class PushkaTitleStrategy extends TitleStrategy {
  private readonly _title = inject(Title);
  private readonly _translateService = inject(TranslateService);

  @Select(SelectedLocalizationState.stream)
  private readonly _selectedLocalization$!: Observable<Localization>;
  private readonly _destroy$ = new Subject<void>();

  public override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);

    this._destroy$.next();
    this._selectedLocalization$
      .pipe(
        tap(() =>
          this._title.setTitle(
            this._translateService.instant(title || 'pageTitle.default')
          )
        ),
        takeUntil(this._destroy$)
      )
      .subscribe();
  }
}
