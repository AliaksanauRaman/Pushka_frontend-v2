import { Injectable, inject } from '@angular/core';
import {
  SwUpdate,
  UnrecoverableStateEvent,
  VersionReadyEvent,
} from '@angular/service-worker';
import { Dialog } from '@angular/cdk/dialog';
import { Store } from '@ngxs/store';
import { Subject, filter, switchMap, take, takeUntil, tap } from 'rxjs';

import { AppUpdateIsAvailablePopupHelperService } from '@shared/services/app-update-is-available-popup-helper/app-update-is-available-popup-helper.service';
import { AppRequiresUpdatePopupHelperService } from '@shared/services/app-requires-update-popup-helper/app-requires-update-popup-helper.service';

import {
  PwaGetLatestVersion,
  PwaIsUnrecoverable,
  PwaNewVersionIsAvailable,
} from '@store/pwa';

@Injectable({
  providedIn: 'root',
})
export class PwaService {
  private readonly _store = inject(Store);
  private readonly _swUpdate = inject(SwUpdate);
  private readonly _dialog = inject(Dialog);
  private readonly _appUpdateIsAvailablePopupHelper = inject(
    AppUpdateIsAvailablePopupHelperService
  );
  private readonly _appRequiresUpdatePopupHelper = inject(
    AppRequiresUpdatePopupHelperService
  );

  private readonly _destroy$ = new Subject<void>();

  public get isEnabled(): boolean {
    return this._swUpdate.isEnabled;
  }

  public subToVersionUpdates(): void {
    this._swUpdate.versionUpdates
      .pipe(
        filter(
          (event): event is VersionReadyEvent => event.type === 'VERSION_READY'
        ),
        switchMap(() => this._dialog.afterAllClosed.pipe(take(1))),
        switchMap(() => this._store.dispatch(new PwaNewVersionIsAvailable())),
        switchMap(() => this._appUpdateIsAvailablePopupHelper.openPopup()),
        filter((result): result is true => result === true),
        switchMap(() => this._store.dispatch(new PwaGetLatestVersion())),
        takeUntil(this._destroy$)
      )
      .subscribe();
  }

  public subToUnrecoverable(): void {
    this._swUpdate.unrecoverable
      .pipe(
        filter(
          (event): event is UnrecoverableStateEvent =>
            event.type === 'UNRECOVERABLE_STATE'
        ),
        tap((event) => console.error(event.reason)),
        switchMap(() => this._dialog.afterAllClosed.pipe(take(1))),
        switchMap(() => this._store.dispatch(new PwaIsUnrecoverable())),
        switchMap(() => this._appRequiresUpdatePopupHelper.openPopup()),
        switchMap(() => this._store.dispatch(new PwaGetLatestVersion())),
        takeUntil(this._destroy$)
      )
      .subscribe();
  }

  public destroySubscriptions(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
