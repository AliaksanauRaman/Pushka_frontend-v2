import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  inject,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DialogTabsComponent } from '@shared/components/dialog-tabs/dialog-tabs.component';
import { DialogTabItemComponent } from '@shared/components/dialog-tab-item/dialog-tab-item.component';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';
import { LoginFormComponent } from '@shared/components/login-form/login-form.component';
import { RegisterFormComponent } from '@shared/components/register-form/register-form.component';

import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';
import { DialogTabsService } from '@shared/services/dialog-tabs/dialog-tabs.service';
import {
  DIALOG_TABS,
  DialogTab,
} from '@shared/services/dialog-tabs/dialog-tabs.service';

import { BaseDialogComponent } from '@shared/base/base-dialog.component';

@Component({
  selector: 'pu-user-entry-dialog',
  templateUrl: './user-entry-dialog.component.html',
  styleUrls: ['./user-entry-dialog.component.scss'],
  providers: [
    DialogTabsService,
    {
      provide: DIALOG_TABS,
      useValue: [
        new DialogTab('navigationLabel.login'),
        new DialogTab('navigationLabel.register'),
      ],
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    TranslateModule,
    DialogTabsComponent,
    DialogTabItemComponent,
    IconButtonComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
})
export class UserEntryDialogComponent
  extends BaseDialogComponent
  implements OnInit
{
  private readonly _snackBarService = inject(SnackBarService);
  protected readonly _dialogTabsService = inject(DialogTabsService);

  protected readonly _isFirstTabActive = computed(() => {
    const activeTab = this._dialogTabsService.activeTab();
    return (
      activeTab !== null &&
      activeTab.equalsTo(this._dialogTabsService.tabs()[0])
    );
  });

  public ngOnInit(): void {
    this._dialogTabsService.activateFirstTab();
  }

  protected handleSuccessLogin(): void {
    this.closeDialog();
    this._snackBarService.showSuccessMessage('successLoginMessage');
  }

  protected handleSuccessRegister(): void {
    this.closeDialog();
    this._snackBarService.showImportantMessage('successRegisterMessage');
  }
}
