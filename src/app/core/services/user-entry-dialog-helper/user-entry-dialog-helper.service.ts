import { Injectable } from '@angular/core';

import { UserEntryDialogComponent } from '@core/dialogs/user-entry-dialog/user-entry-dialog.component';

import { BaseDialogHelperService } from '@shared/base/base-dialog-helper.service';

@Injectable()
export class UserEntryDialogHelperService extends BaseDialogHelperService {
  public openDialog(): void {
    this._dialog.open(UserEntryDialogComponent, {
      width: '664px',
      panelClass: [this._config.baseClass, this._config.scrollableClass],
      autoFocus: false,
    });
  }
}
