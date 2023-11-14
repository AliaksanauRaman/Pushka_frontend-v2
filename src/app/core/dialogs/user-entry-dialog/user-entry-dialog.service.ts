import { Injectable, inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { BehaviorSubject } from 'rxjs';

import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';

type UserEntryDialogState = Readonly<{
  isLoginView: boolean;
  isRegisterView: boolean;
}>;

@Injectable()
export class UserEntryDialogService {
  private readonly _dialogRef = inject(DialogRef);
  private readonly _snackBarService = inject(SnackBarService);

  private readonly _state$ = new BehaviorSubject<UserEntryDialogState>({
    isLoginView: true,
    isRegisterView: false,
  });

  public readonly state$ = this._state$.asObservable();

  public closeDialog(): void {
    this._dialogRef.close();
  }

  public switchToLoginView(): void {
    this._state$.next({
      isLoginView: true,
      isRegisterView: false,
    });
  }

  public switchToRegisterView(): void {
    this._state$.next({
      isLoginView: false,
      isRegisterView: true,
    });
  }

  public handleSuccessLogin(): void {
    this.closeDialog();
    this._snackBarService.showSuccessMessage('successLoginMessage');
  }

  public handleSuccessRegister(): void {
    this.closeDialog();
    this._snackBarService.showImportantMessage('successRegisterMessage');
  }
}
