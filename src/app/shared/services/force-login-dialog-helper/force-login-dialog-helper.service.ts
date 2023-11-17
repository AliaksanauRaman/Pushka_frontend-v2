import { Injectable } from '@angular/core';

import { ForceLoginDialogComponent } from '@shared/dialogs/force-login-dialog/force-login-dialog.component';

import { BaseDialogHelperService } from '@shared/base/base-dialog-helper.service';
import { ForceLoginDialogData } from '@shared/types/force-login-dialog-data';

@Injectable({
  providedIn: 'root',
})
export class ForceLoginDialogHelperService extends BaseDialogHelperService {
  public openDialog(data: ForceLoginDialogData): void {
    this._dialog.open(ForceLoginDialogComponent, {
      data,
    });
  }
}
