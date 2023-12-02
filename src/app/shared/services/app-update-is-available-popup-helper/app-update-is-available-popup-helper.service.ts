import { InjectionToken, inject } from '@angular/core';

import { ScreenSizeService } from '@shared/services/screen-size/screen-size.service';

import { IAppUpdateIsAvailablePopupHelperService } from './app-update-is-available-popup-helper.service.interface';
import { AppUpdateIsAvailableDialogHelperService } from './app-update-is-available-dialog-helper.service';
import { AppUpdateIsAvailableBottomSheetHelperService } from './app-update-is-available-bottom-sheet-helper.service';

export const AppUpdateIsAvailablePopupHelperService =
  new InjectionToken<IAppUpdateIsAvailablePopupHelperService>(
    'AppUpdateIsAvailablePopupHelperService',
    {
      providedIn: 'root',
      factory: () => {
        if (inject(ScreenSizeService).checkIsLaptop()) {
          return new AppUpdateIsAvailableDialogHelperService();
        }

        return new AppUpdateIsAvailableBottomSheetHelperService();
      },
    }
  );
