import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CdkMenuTrigger } from '@angular/cdk/menu';
import { Select, Store } from '@ngxs/store';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { LocalizationSelectionContainerComponent } from '@core/components/localization-selection-container/localization-selection-container.component';
import { MenuComponent } from '@core/components/menu/menu.component';

import { UserEntryDialogHelperService } from '@core/services/user-entry-dialog-helper/user-entry-dialog-helper.service';

import { LogoutUser, UserState } from '@store/user';
import { User } from '@shared/types/user';
import { PwaGetLatestVersion, PwaState } from '@store/pwa';

@Component({
  selector: 'pu-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  providers: [UserEntryDialogHelperService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CdkMenuTrigger,
    TranslateModule,
    LocalizationSelectionContainerComponent,
    MenuComponent,
  ],
})
export class ToolbarComponent {
  private readonly _store = inject(Store);
  private readonly _userEntryDialogHelper = inject(
    UserEntryDialogHelperService
  );

  @Select(UserState.stream)
  private readonly _user$!: Observable<User | null>;
  protected readonly _user = toSignal(this._user$);

  @Select(PwaState.isAppUpdateAvailable)
  private readonly _isAppUpdateAvailable$!: Observable<boolean>;
  protected readonly _isAppUpdateAvailable = toSignal(
    this._isAppUpdateAvailable$
  );

  protected openEntryDialog(): void {
    this._userEntryDialogHelper.openDialog();
  }

  protected logoutUser(): void {
    this._store.dispatch(new LogoutUser());
  }

  protected updateApp(): void {
    this._store.dispatch(new PwaGetLatestVersion());
  }
}
