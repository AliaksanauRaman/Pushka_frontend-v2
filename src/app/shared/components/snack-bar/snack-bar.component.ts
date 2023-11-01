import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {
  MAT_SNACK_BAR_DATA,
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
  imports: [NgOptimizedImage, TranslateModule],
})
export class SnackBarComponent {
  protected readonly _snackBarRef = inject(MatSnackBarRef);
  protected readonly _data = inject<SnackBarData>(MAT_SNACK_BAR_DATA);
}
