import { Injectable, inject } from '@angular/core';

import { UnderTestingDialogComponent } from '@core/dialogs/under-testing-dialog/under-testing-dialog.component';

import { LOCAL_STORAGE } from '@global/local-storage';

import { BaseDialogHelperService } from '@shared/base/base-dialog-helper.service';

const IS_VIEWED_LOCAL_STORAGE_KEY = 'IS_UNDER_TESTING_DIALOG_VIEWED';
const IS_VIEWED_YES_VALUE = 'yes';

// TODO: Not used
@Injectable({
  providedIn: 'root',
})
export class UnderTestingDialogHelperService extends BaseDialogHelperService {
  private readonly _localStorage = inject(LOCAL_STORAGE);

  public openDialogIfNotViewed(): void {
    const isViewed = this._localStorage.getItem(IS_VIEWED_LOCAL_STORAGE_KEY);

    if (isViewed === IS_VIEWED_YES_VALUE) {
      return;
    }

    this._localStorage.setItem(
      IS_VIEWED_LOCAL_STORAGE_KEY,
      IS_VIEWED_YES_VALUE
    );
    this.openDialog();
  }

  public openDialog(): void {
    this._dialog.open(UnderTestingDialogComponent, {
      width: '664px',
    });
  }
}
