import { Injectable } from '@angular/core';

import { ForceLoginDialogComponent } from '@shared/dialogs/force-login-dialog/force-login-dialog.component';

import { BaseDialogService } from '@shared/base/base-dialog.service';
import { ForceLoginDialogData } from '@shared/types/force-login-dialog-data';

@Injectable({
  providedIn: 'root',
})
export class ForceLoginDialogHelperService extends BaseDialogService {
  public openDialog(data: ForceLoginDialogData): void {
    this._dialog.open(ForceLoginDialogComponent, {
      data,
    });
  }
}
