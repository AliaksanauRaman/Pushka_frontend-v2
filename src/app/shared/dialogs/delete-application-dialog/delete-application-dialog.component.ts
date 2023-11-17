import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';
import { PlaceholderComponent } from '@shared/components/placeholder/placeholder.component';
import { AccentButtonComponent } from '@shared/components/accent-button/accent-button.component';
import { SecondaryButtonComponent } from '@shared/components/secondary-button/secondary-button.component';

import { BaseDialogComponent } from '@shared/base/base-dialog.component';

@Component({
  selector: 'pu-delete-application-dialog',
  templateUrl: './delete-application-dialog.component.html',
  styleUrl: './delete-application-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    TranslateModule,
    IconButtonComponent,
    PlaceholderComponent,
    AccentButtonComponent,
    SecondaryButtonComponent,
  ],
})
export class DeleteApplicationDialogComponent extends BaseDialogComponent {}
