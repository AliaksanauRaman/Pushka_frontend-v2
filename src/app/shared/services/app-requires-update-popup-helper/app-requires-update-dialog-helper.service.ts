import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppRequiresUpdateDialogComponent } from '@shared/dialogs/app-requires-update-dialog/app-requires-update-dialog.component';

import { BaseDialogHelperService } from '@shared/base/base-dialog-helper.service';
import { IAppRequiresUpdatePopupHelperService } from './app-requires-update-popup-helper.service.interface';

@Injectable({
  providedIn: 'root',
})
export class AppRequiresUpdateDialogHelperService
  extends BaseDialogHelperService
  implements IAppRequiresUpdatePopupHelperService
{
  public openPopup(): Observable<unknown> {
    this._dialog.closeAll();

    return this._dialog.open<
      unknown,
      unknown,
      AppRequiresUpdateDialogComponent
    >(AppRequiresUpdateDialogComponent, {
      panelClass: [this._config.baseClass, this._config.smallClass],
      disableClose: true,
    }).closed;
  }
}
