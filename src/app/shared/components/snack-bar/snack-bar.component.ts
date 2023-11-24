import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarModule,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';

import { SnackBarData } from '@shared/types/snack-bar-data';

@Component({
  selector: 'pu-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatSnackBarModule, TranslateModule],
})
export class SnackBarComponent {
  protected readonly _snackBarRef = inject(MatSnackBarRef);
  protected readonly _data = inject<SnackBarData>(MAT_SNACK_BAR_DATA);
}
