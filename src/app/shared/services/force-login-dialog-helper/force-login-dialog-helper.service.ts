import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ForceLoginDialogComponent } from '@shared/dialogs/force-login-dialog/force-login-dialog.component';

import { BaseDialogHelperService } from '@shared/base/base-dialog-helper.service';
import { ForceLoginDialogData } from '@shared/types/force-login-dialog-data';
import { ForceLoginDialogResult } from '@shared/types/force-login-dialog-result';

@Injectable({
  providedIn: 'root',
})
export class ForceLoginDialogHelperService extends BaseDialogHelperService {
  public openDialog(data: ForceLoginDialogData): Observable<ForceLoginDialogResult> {
    return this._dialog.open<
      ForceLoginDialogResult,
      ForceLoginDialogData,
      ForceLoginDialogComponent
    >(ForceLoginDialogComponent, {
      width: '664px',
      data,
    }).closed;
  }
}
