import { Injectable } from '@angular/core';

import { SnackBarComponent } from '@shared/components/snack-bar/snack-bar.component';

import { BaseSnackBarService } from './base-snack-bar.service';
import { SnackBarData } from '@shared/types/snack-bar-data';

@Injectable({
  providedIn: 'root',
})
export class LaptopSnackBarService extends BaseSnackBarService {
  public override showSuccessMessage(message: string): void {
    this._snackBar.openFromComponent(SnackBarComponent, {
      horizontalPosition: 'end',
      panelClass: [
        this._config.baseClass,
        this._config.successClass,
        this._config.laptopClass,
      ],
      duration: this._config.successDuration,
      data: new SnackBarData(message),
    });
  }

  public override showErrorMessage(message: string): void {
    this._snackBar.openFromComponent(SnackBarComponent, {
      horizontalPosition: 'end',
      panelClass: [
        this._config.baseClass,
        this._config.errorClass,
        this._config.laptopClass,
      ],
      duration: this._config.errorDuration,
      data: new SnackBarData(message),
    });
  }

  public override showImportantMessage(message: string): void {
    this._snackBar.openFromComponent(SnackBarComponent, {
      horizontalPosition: 'end',
      panelClass: [
        this._config.baseClass,
        this._config.importantClass,
        this._config.laptopClass,
      ],
      data: new SnackBarData(message, {
        showClose: false,
        actionLabel: 'actionLabel.ok',
      }),
    });
  }
}
