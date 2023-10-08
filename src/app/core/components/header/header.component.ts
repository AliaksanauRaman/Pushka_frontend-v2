import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LocalizationSelectionContainerComponent } from '../localization-selection-container/localization-selection-container.component';

@Component({
  selector: 'pu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LocalizationSelectionContainerComponent],
})
export class HeaderComponent {}
