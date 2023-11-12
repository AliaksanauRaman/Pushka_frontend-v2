import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, tap, throwError } from 'rxjs';

import { HelpRequestsHttpService } from '@shared/http/help-requests/help-requests-http.service';

import { BaseStateService } from '@shared/base/base-state.service';
import { HelpRequestsList } from '@shared/types/help-request';

type RequestsPageState = {
  isLoading: boolean;
  helpRequestsList: HelpRequestsList | null;
  responseErrorMessage: string;
};

@Injectable()
export class RequestsPageService extends BaseStateService<RequestsPageState> {
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _helpRequestsHttpService = inject(
    HelpRequestsHttpService
  );

  public fetchPublishedHelpRequests(): void {
    this.updateState({
      isLoading: true,
      helpRequestsList: null,
      responseErrorMessage: '',
    });

    this._helpRequestsHttpService
      .getPublished()
      .pipe(
        tap((helpRequestsList) =>
          this.updateState({
            isLoading: false,
            helpRequestsList,
            responseErrorMessage: '',
          })
        ),
        catchError((error: unknown) => {
          this.updateState({
            isLoading: false,
            helpRequestsList: null,
            responseErrorMessage:
              'backendError.unknownHelpRequestsRequestError',
          });
          return throwError(() => error);
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }

  protected getInitialState(): RequestsPageState {
    return {
      isLoading: false,
      helpRequestsList: null,
      responseErrorMessage: '',
    };
  }
}
