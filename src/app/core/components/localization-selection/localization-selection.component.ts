import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
  signal,
} from '@angular/core';
import { NgFor } from '@angular/common';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { ConnectedPosition } from '@angular/cdk/overlay';

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
  @Input({ required: true })
  public set localizations(value: ReadonlyArray<Localization>) {
    this._localizations.set(value);
  }

  @Input({ required: true })
  public set selectedLocalization(value: Localization) {
    this._selectedLocalization.set(value);
  }

  @Output()
  public readonly select = new EventEmitter<Localization>();

  protected readonly _position: ConnectedPosition = {
    originX: 'center',
    originY: 'bottom',
    overlayX: 'center',
    overlayY: 'top',
  };
  protected readonly _localizations = signal<ReadonlyArray<Localization>>([]);
  protected readonly _selectedLocalization = signal<Localization | null>(null);

  protected trackByLocalizationLabel(
    _: number,
    localization: Localization
  ): string {
    return localization.label;
  }
}
