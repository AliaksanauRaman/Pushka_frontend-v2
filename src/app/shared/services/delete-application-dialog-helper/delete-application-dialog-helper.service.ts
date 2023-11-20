import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DeleteApplicationDialogComponent } from '@shared/dialogs/delete-application-dialog/delete-application-dialog.component';

import { BaseDialogHelperService } from '@shared/base/base-dialog-helper.service';

@Injectable({
  providedIn: 'root',
})
export class DeleteApplicationDialogHelperService extends BaseDialogHelperService {
  public openDialog(): Observable<true | undefined> {
    return this._dialog.open<
      true | undefined,
      unknown,
      DeleteApplicationDialogComponent
    >(DeleteApplicationDialogComponent, {
      width: '100%',
    }).closed;
  }
}
