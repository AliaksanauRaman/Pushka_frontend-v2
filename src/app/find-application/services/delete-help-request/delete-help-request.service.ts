import { DestroyRef, Injectable, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, catchError, finalize, throwError } from 'rxjs';

import { HelpRequestsHttpService } from '@shared/http/help-requests/help-requests-http.service';
import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';

@Injectable()
export class DeleteHelpRequestService {
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _helpRequestsHttpService = inject(HelpRequestsHttpService);
  private readonly _snackBarService = inject(SnackBarService);

  public readonly isDeleting = signal(false);

  public deleteById(id: number): Observable<unknown> {
    this.isDeleting.set(true);

    return this._helpRequestsHttpService.deleteOne(id).pipe(
      catchError((error: unknown) => {
        this._snackBarService.showErrorMessage(
          'backendError.unknownHelpRequestDeletionError'
        );
        return throwError(() => error);
      }),
      finalize(() => this.isDeleting.set(false)),
      takeUntilDestroyed(this._destroyRef)
    );
  }
}
