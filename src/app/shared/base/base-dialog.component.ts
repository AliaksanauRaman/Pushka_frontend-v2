import { Directive, inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

@Directive()
export abstract class BaseDialogComponent<R = unknown, C = unknown> {
  protected readonly _dialogRef = inject<DialogRef<R, C>>(DialogRef);

  protected closeDialog(data?: R): void {
    this._dialogRef.close(data);
  }
}
