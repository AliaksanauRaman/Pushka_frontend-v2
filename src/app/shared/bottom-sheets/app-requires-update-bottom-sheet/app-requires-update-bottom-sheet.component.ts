import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { PrimaryButtonComponent } from '@shared/components/primary-button/primary-button.component';

import { BaseBottomSheetComponent } from '@shared/base/base-bottom-sheet.component';

@Component({
  selector: 'pu-app-requires-update-bottom-sheet',
  templateUrl: './app-requires-update-bottom-sheet.component.html',
  styleUrl: './app-requires-update-bottom-sheet.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslateModule, PrimaryButtonComponent],
})
export class AppRequiresUpdateBottomSheetComponent extends BaseBottomSheetComponent {}
