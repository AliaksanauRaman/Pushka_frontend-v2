import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppUpdateIsAvailableDialogComponent } from '@shared/dialogs/app-update-is-available-dialog/app-update-is-available-dialog.component';

import { BaseDialogHelperService } from '@shared/base/base-dialog-helper.service';
import { ConfirmPopupResult } from '@shared/types/confirm-popup-result';
import { IAppUpdateIsAvailablePopupHelperService } from './app-update-is-available-popup-helper.service.interface';

@Injectable({
  providedIn: 'root',
})
export class AppUpdateIsAvailableDialogHelperService
  extends BaseDialogHelperService
  implements IAppUpdateIsAvailablePopupHelperService
{
  public openPopup(): Observable<ConfirmPopupResult> {
    this._dialog.closeAll();

    return this._dialog.open<
      ConfirmPopupResult,
      unknown,
      AppUpdateIsAvailableDialogComponent
    >(AppUpdateIsAvailableDialogComponent, {
      panelClass: [this._config.baseClass, this._config.smallClass],
    }).closed;
  }
}
