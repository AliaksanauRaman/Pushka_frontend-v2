import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { PrimaryButtonComponent } from '@shared/components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '@shared/components/secondary-button/secondary-button.component';

import { BaseBottomSheetComponent } from '@shared/base/base-bottom-sheet.component';
import { ConfirmPopupResult } from '@shared/types/confirm-popup-result';

@Component({
  selector: 'pu-app-update-is-available-bottom-sheet',
  templateUrl: './app-update-is-available-bottom-sheet.component.html',
  styleUrl: './app-update-is-available-bottom-sheet.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslateModule, PrimaryButtonComponent, SecondaryButtonComponent],
})
export class AppUpdateIsAvailableBottomSheetComponent extends BaseBottomSheetComponent<ConfirmPopupResult> {}
