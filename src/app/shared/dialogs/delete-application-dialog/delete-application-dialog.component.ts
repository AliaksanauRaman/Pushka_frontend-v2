import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { AccentButtonComponent } from '@shared/components/accent-button/accent-button.component';
import { SecondaryButtonComponent } from '@shared/components/secondary-button/secondary-button.component';

import { BaseDialogComponent } from '@shared/base/base-dialog.component';
import { ConfirmPopupResult } from '@shared/types/confirm-popup-result';

@Component({
  selector: 'pu-delete-application-dialog',
  templateUrl: './delete-application-dialog.component.html',
  styleUrl: './delete-application-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslateModule, AccentButtonComponent, SecondaryButtonComponent],
})
export class DeleteApplicationDialogComponent extends BaseDialogComponent<ConfirmPopupResult> {}
