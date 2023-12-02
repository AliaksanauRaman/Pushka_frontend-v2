import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DeleteApplicationDialogComponent } from '@shared/dialogs/delete-application-dialog/delete-application-dialog.component';

import { BaseDialogHelperService } from '@shared/base/base-dialog-helper.service';
import { ConfirmPopupResult } from '@shared/types/confirm-popup-result';

@Injectable({
  providedIn: 'root',
})
export class DeleteApplicationDialogHelperService extends BaseDialogHelperService {
  public openDialog(): Observable<ConfirmPopupResult> {
    return this._dialog.open<
      ConfirmPopupResult,
      unknown,
      DeleteApplicationDialogComponent
    >(DeleteApplicationDialogComponent, {
      panelClass: [this._config.baseClass, this._config.smallClass],
    }).closed;
  }
}
