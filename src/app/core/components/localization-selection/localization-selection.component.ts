import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { Store } from '@ngxs/store';

import { LOCALIZATIONS } from '@shared/dependencies/localizations';

import { LocalizationsState, SelectLocalization } from '@store/localizations';
import { Localization } from '@shared/types/localization';

@Component({
  selector: 'pu-localization-selection',
  templateUrl: './localization-selection.component.html',
  styleUrls: ['./localization-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, CdkMenuTrigger, CdkMenu, CdkMenuItem],
})
export class LocalizationSelectionComponent {
  private readonly _store = inject(Store);
  protected readonly _localizations = inject(LOCALIZATIONS);

  protected readonly _selectedLocalization$ = this._store.select(
    LocalizationsState.stream
  );

  protected trackByLocalizationLabel(
    _: number,
    localization: Localization
  ): string {
    return localization.label;
  }

  protected handleLocalizationSelect(localization: Localization): void {
    this._store.dispatch(new SelectLocalization(localization));
  }
}
