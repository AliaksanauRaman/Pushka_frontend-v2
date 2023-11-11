import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  inject,
} from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';
import { DialogTabsComponent } from '@shared/components/dialog-tabs/dialog-tabs.component';
import { DialogTabItemComponent } from '@shared/components/dialog-tab-item/dialog-tab-item.component';
import { LoginFormComponent } from '@core/components/login-form/login-form.component'; // TODO: Move to shared
import { RegisterFormComponent } from '@core/components/register-form/register-form.component'; // TODO: Move to shared

import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';
import {
  DIALOG_TABS,
  DialogTab,
  DialogTabsService,
} from '@shared/services/dialog-tabs/dialog-tabs.service';

import { ForceLoginDialogData } from '@shared/types/force-login-dialog-data';

@Component({
  selector: 'pu-force-login-dialog',
  templateUrl: './force-login-dialog.component.html',
  styleUrl: './force-login-dialog.component.scss',
  providers: [
    {
      provide: DIALOG_TABS,
      useValue: [
        new DialogTab('navigationLabel.login'),
        new DialogTab('navigationLabel.register'),
      ],
    },
    DialogTabsService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    TranslateModule,
    IconButtonComponent,
    DialogTabsComponent,
    DialogTabItemComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
})
export class ForceLoginDialogComponent implements OnInit {
  private readonly _dialogRef = inject(DialogRef);
  private readonly _snackBarService = inject(SnackBarService);
  protected readonly _data: ForceLoginDialogData = inject(DIALOG_DATA);
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

  protected closeDialog(): void {
    this._dialogRef.close();
  }

  protected handleSuccessLogin(): void {
    this.closeDialog();
    this._snackBarService.showSuccessMessage('Success login!');
  }

  protected handleSuccessRegister(): void {
    this.closeDialog();
    this._snackBarService.showSuccessMessage('Success register!');
  }
}
