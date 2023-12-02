import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppRequiresUpdateBottomSheetComponent } from '@shared/bottom-sheets/app-requires-update-bottom-sheet/app-requires-update-bottom-sheet.component';

import { BaseBottomSheetHelperService } from '@shared/base/base-bottom-sheet-helper.service';
import { IAppRequiresUpdatePopupHelperService } from './app-requires-update-popup-helper.service.interface';

@Injectable({
  providedIn: 'root',
})
export class AppRequiresUpdateBottomSheetHelperService
  extends BaseBottomSheetHelperService
  implements IAppRequiresUpdatePopupHelperService
{
  public openPopup(): Observable<unknown> {
    return this._matBottomSheet
      .open<AppRequiresUpdateBottomSheetComponent, unknown, unknown>(
        AppRequiresUpdateBottomSheetComponent,
        {
          panelClass: this._config.baseClass,
          disableClose: true,
        }
      )
      .afterDismissed();
  }
}
