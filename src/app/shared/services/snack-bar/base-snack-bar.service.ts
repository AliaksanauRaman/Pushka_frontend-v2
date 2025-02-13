import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SnackBarComponent } from '@shared/components/snack-bar/snack-bar.component';

import { SNACK_BAR_CONFIG } from './snack-bar.config';
import { SnackBarData } from '@shared/types/snack-bar-data';

@Injectable()
export abstract class BaseSnackBarService {
  protected readonly _snackBar = inject(MatSnackBar);
  protected readonly _config = inject(SNACK_BAR_CONFIG);

  public showSuccessMessage(message: string): void {
    this._snackBar.openFromComponent(SnackBarComponent, {
      panelClass: [this._config.baseClass, this._config.successClass],
      duration: this._config.successDuration,
      data: new SnackBarData(message),
    });
  }

  public showErrorMessage(message: string): void {
    this._snackBar.openFromComponent(SnackBarComponent, {
      panelClass: [this._config.baseClass, this._config.errorClass],
      duration: this._config.errorDuration,
      data: new SnackBarData(message),
    });
  }

  public showImportantMessage(message: string): void {
    this._snackBar.openFromComponent(SnackBarComponent, {
      panelClass: [this._config.baseClass, this._config.importantClass],
      data: new SnackBarData(message, {
        showClose: false,
        actionLabel: 'actionLabel.ok',
      }),
    });
  }
}
