import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, tap, throwError } from 'rxjs';

import { MyApplicationsHttpService } from '@shared/http/my-applications/my-applications-http.service';

import { BaseStateService } from '@shared/base/base-state.service';
import { PageableData } from '@shared/types/pageable-data';
import { MyApplication } from '@shared/types/my-application';
import { MyApplicationOptionType } from '@shared/enums/my-application-option-type.enum';

type MyApplicationsPageState = Readonly<{
  isLoading: boolean;
  isAllType: boolean;
  responseData: PageableData<MyApplication> | null;
  responseErrorMessage: string;
}>;

@Injectable()
export class MyApplicationsPageService extends BaseStateService<MyApplicationsPageState> {
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _myApplicationsHttpService = inject(
    MyApplicationsHttpService
  );

  public fetchAllMyApplications(type = MyApplicationOptionType.ALL): void {
    const isAllType = type === MyApplicationOptionType.ALL;

    this.updateState({
      isLoading: true,
      isAllType,
      responseData: null,
      responseErrorMessage: '',
    });

    this._myApplicationsHttpService
      .get(type)
      .pipe(
        tap((responseData) =>
          this.updateState({
            isLoading: false,
            isAllType,
            responseData,
            responseErrorMessage: '',
          })
        ),
        catchError((error: unknown) => {
          this.updateState({
            isLoading: false,
            isAllType,
            responseData: null,
            responseErrorMessage:
              'backendError.unknownGetMyApplicationsError',
          });
          return throwError(() => error);
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }

  public deleteMyApplication(myApplication: MyApplication): void {
    const currentState = this.getState();

    if (currentState.responseData === null) {
      throw new Error('Response data cannot be null!');
    }

    this.updateState({
      ...currentState,
      responseData: currentState.responseData.deleteItem(myApplication),
    });
  }

  protected getInitialState(): Readonly<MyApplicationsPageState> {
    return {
      isLoading: false,
      isAllType: false,
      responseData: null,
      responseErrorMessage: '',
    };
  }
}
