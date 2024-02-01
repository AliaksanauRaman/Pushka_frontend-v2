import { Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, catchError, finalize, throwError } from 'rxjs';

import { HelpRequestsHttpService } from '@shared/http/help-requests/help-requests-http.service';

import { BaseDeleteApplicationService } from '../../base/base-delete-application/base-delete-application.service';

@Injectable()
export class DeleteHelpRequestService extends BaseDeleteApplicationService {
  private readonly _helpRequestsHttpService = inject(HelpRequestsHttpService);

  public override deleteById(id: number): Observable<unknown> {
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
