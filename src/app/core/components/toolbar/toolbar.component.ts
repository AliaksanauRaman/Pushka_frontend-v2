import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LocalizationSelectionContainerComponent } from '@core/components/localization-selection-container/localization-selection-container.component';
import { SecondaryButtonComponent } from '@shared/components/secondary-button/secondary-button.component';

@Component({
  selector: 'pu-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LocalizationSelectionContainerComponent, SecondaryButtonComponent],
})
export class ToolbarComponent {}
