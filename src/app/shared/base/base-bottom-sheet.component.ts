import { Directive, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Directive()
export abstract class BaseBottomSheetComponent<R = unknown, C = unknown> {
  protected readonly _matBottomSheetRef =
    inject<MatBottomSheetRef<C, R>>(MatBottomSheetRef);

  protected closeBottomSheet(data?: R): void {
    this._matBottomSheetRef.dismiss(data);
  }
}
