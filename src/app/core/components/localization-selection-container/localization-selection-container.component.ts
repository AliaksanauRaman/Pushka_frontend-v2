import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { Store } from '@ngxs/store';
import { tap } from 'rxjs';

import { LocalizationSelectionComponent } from '../localization-selection/localization-selection.component';

import { LOCALIZATIONS } from '@shared/dependencies/localizations';

import {
  SelectLocalization,
  SelectedLocalizationState,
} from '@store/selected-localization';
import { Localization } from '@shared/types/localization';

@Component({
  selector: 'pu-localization-selection-container',
  templateUrl: './localization-selection-container.component.html',
  styleUrls: ['./localization-selection-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, AsyncPipe, LocalizationSelectionComponent],
})
export class LocalizationSelectionContainerComponent {
  private readonly _store = inject(Store);
  protected readonly _localizations = inject(LOCALIZATIONS);

  private _prevSelectedLocalization: Localization | null = null;
  protected readonly _selectedLocalization$ = this._store
    .select(SelectedLocalizationState.stream)
    .pipe(
      tap(
        (selectedLocalization) =>
          (this._prevSelectedLocalization = selectedLocalization)
      )
    );

  protected handleSelect(localization: Localization): void {
    if (
      this._prevSelectedLocalization !== null &&
      localization.equalsTo(this._prevSelectedLocalization)
    ) {
      return;
    }

    this._store.dispatch(new SelectLocalization(localization));
  }
}
