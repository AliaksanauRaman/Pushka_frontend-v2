import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { AccentButtonComponent } from '@shared/components/accent-button/accent-button.component';
import { SecondaryButtonComponent } from '@shared/components/secondary-button/secondary-button.component';

import { BaseDialogComponent } from '@shared/base/base-dialog.component';
import { ConfirmPopupResult } from '@shared/types/confirm-popup-result';

@Component({
  selector: 'pu-app-update-is-available-dialog',
  templateUrl: './app-update-is-available-dialog.component.html',
  styleUrl: './app-update-is-available-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslateModule, AccentButtonComponent, SecondaryButtonComponent],
})
export class AppUpdateIsAvailableDialogComponent extends BaseDialogComponent<ConfirmPopupResult> {}
