import { Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { UserEntryDialogComponent } from '@core/dialogs/user-entry-dialog/user-entry-dialog.component';

import { BaseDialogHelperService } from '@shared/base/base-dialog-helper.service';

// TODO
// <meta content="#1f3c47" data-react-helmet="true" name="theme-color" />
@Injectable()
export class UserEntryDialogHelperService extends BaseDialogHelperService {
  private readonly _meta = inject(Meta);

  public openDialog(): void {
    this._meta.addTag({
      content: '#1f3c47',
      name: 'theme-color',
      'data-react-helmet': 'true',
    });
    const dialogRef = this._dialog.open(UserEntryDialogComponent, {
      width: '100%',
      autoFocus: false,
    });

    dialogRef.closed.subscribe({
      next: () => this._meta.removeTag('data-react-helmet=true'),
    });
  }
}
