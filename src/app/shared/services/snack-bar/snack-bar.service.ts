import { Injectable } from '@angular/core';

import { LaptopSnackBarService } from './laptop-snack-bar.service';
import { ScreenSizeService } from '@shared/services/screen-size/screen-size.service';

import { BaseSnackBarService } from './base-snack-bar.service';

@Injectable({
  providedIn: 'root',
  useFactory: (screenSize: ScreenSizeService) => {
    if (screenSize.checkIsLaptop()) {
      return new LaptopSnackBarService();
    }

    return new SnackBarService();
  },
  deps: [ScreenSizeService],
})
export class SnackBarService extends BaseSnackBarService {}
