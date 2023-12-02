import { InjectionToken, inject } from '@angular/core';

import { ScreenSizeService } from '@shared/services/screen-size/screen-size.service';

import { IAppRequiresUpdatePopupHelperService } from './app-requires-update-popup-helper.service.interface';
import { AppRequiresUpdateDialogHelperService } from './app-requires-update-dialog-helper.service';
import { AppRequiresUpdateBottomSheetHelperService } from './app-requires-update-bottom-sheet-helper.service';

export const AppRequiresUpdatePopupHelperService =
  new InjectionToken<IAppRequiresUpdatePopupHelperService>(
    'AppRequiresUpdatePopupHelperService',
    {
      providedIn: 'root',
      factory: () => {
        if (inject(ScreenSizeService).checkIsLaptop()) {
          return new AppRequiresUpdateDialogHelperService();
        }

        return new AppRequiresUpdateBottomSheetHelperService();
      },
    }
  );
