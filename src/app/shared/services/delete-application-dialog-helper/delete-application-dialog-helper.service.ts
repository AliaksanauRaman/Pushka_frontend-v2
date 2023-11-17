import { Injectable } from '@angular/core';

import { DeleteApplicationDialogComponent } from '@shared/dialogs/delete-application-dialog/delete-application-dialog.component';

import { BaseDialogHelperService } from '@shared/base/base-dialog-helper.service';

@Injectable({
  providedIn: 'root',
})
export class DeleteApplicationDialogHelperService extends BaseDialogHelperService {
  public openDialog(): void {
    this._dialog.open(DeleteApplicationDialogComponent, {
      width: '100%',
    });
  }
}
