import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, tap, throwError } from 'rxjs';

import { MyApplicationsHttpService } from '@shared/http/my-applications/my-applications-http.service';

import { BaseStateService } from '@shared/base/base-state.service';
import { MyApplicationsList } from '@shared/types/my-application';
import { MyApplicationOptionType } from '@shared/enums/my-application-option-type.enum';

type MyApplicationsPageState = Readonly<{
  isLoading: boolean;
  myApplicationsList: MyApplicationsList | null;
  responseErrorMessage: string;
}>;

@Injectable()
export class MyApplicationsPageService extends BaseStateService<MyApplicationsPageState> {
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _myApplicationsHttpService = inject(
    MyApplicationsHttpService
  );

  public fetchAllMyApplications(type = MyApplicationOptionType.ALL): void {
    this.updateState({
      isLoading: true,
      myApplicationsList: null,
      responseErrorMessage: '',
    });

    this._myApplicationsHttpService
      .getAll(type)
      .pipe(
        tap((myApplicationsList) =>
          this.updateState({
            isLoading: false,
            myApplicationsList,
            responseErrorMessage: '',
          })
        ),
        catchError((error: unknown) => {
          this.updateState({
            isLoading: false,
            myApplicationsList: null,
            responseErrorMessage:
              'backendError.unknownMyApplicationsRequestError',
          });
          return throwError(() => error);
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }

  protected getInitialState(): Readonly<MyApplicationsPageState> {
    return {
      isLoading: false,
      myApplicationsList: null,
      responseErrorMessage: '',
    };
  }
}
