import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { AccentButtonComponent } from '@shared/components/accent-button/accent-button.component';

import { BaseDialogComponent } from '@shared/base/base-dialog.component';

@Component({
  selector: 'pu-app-requires-update-dialog',
  templateUrl: './app-requires-update-dialog.component.html',
  styleUrl: './app-requires-update-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslateModule, AccentButtonComponent],
})
export class AppRequiresUpdateDialogComponent extends BaseDialogComponent {}
