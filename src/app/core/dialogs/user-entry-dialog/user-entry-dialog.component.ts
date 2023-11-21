import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';
import { LoginFormComponent } from '@shared/components/login-form/login-form.component';
import { RegisterFormComponent } from '@shared/components/register-form/register-form.component';

import { UserEntryDialogService } from './user-entry-dialog.service';

@Component({
  selector: 'pu-user-entry-dialog',
  templateUrl: './user-entry-dialog.component.html',
  styleUrls: ['./user-entry-dialog.component.scss'],
  providers: [UserEntryDialogService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    TranslateModule,
    IconButtonComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
})
export class UserEntryDialogComponent {
  protected readonly _service = inject(UserEntryDialogService);
}
