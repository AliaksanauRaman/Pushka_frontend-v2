import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppUpdateIsAvailableBottomSheetComponent } from '@shared/bottom-sheets/app-update-is-available-bottom-sheet/app-update-is-available-bottom-sheet.component';

import { BaseBottomSheetHelperService } from '@shared/base/base-bottom-sheet-helper.service';
import { ConfirmPopupResult } from '@shared/types/confirm-popup-result';
import { IAppUpdateIsAvailablePopupHelperService } from './app-update-is-available-popup-helper.service.interface';

@Injectable({
  providedIn: 'root',
})
export class AppUpdateIsAvailableBottomSheetHelperService
  extends BaseBottomSheetHelperService
  implements IAppUpdateIsAvailablePopupHelperService
{
  public openPopup(): Observable<ConfirmPopupResult> {
    return this._matBottomSheet
      .open<
        AppUpdateIsAvailableBottomSheetComponent,
        unknown,
        ConfirmPopupResult
      >(AppUpdateIsAvailableBottomSheetComponent, {
        panelClass: this._config.baseClass,
      })
      .afterDismissed();
  }
}
