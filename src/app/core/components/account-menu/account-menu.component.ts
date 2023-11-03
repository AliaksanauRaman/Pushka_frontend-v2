import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { TranslateModule } from '@ngx-translate/core';

import { AccountAvatarComponent } from '@core/components/account-avatar/account-avatar.component';

import { User } from '@shared/types/user';

@Component({
  selector: 'pu-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgOptimizedImage,
    CdkMenuItem,
    TranslateModule,
    AccountAvatarComponent,
  ],
  hostDirectives: [
    {
      directive: CdkMenu,
    },
  ],
})
export class AccountMenuComponent {
  @Input({ required: true })
  public set user(value: User) {
    this._user = value;
  }

  @Output()
  public readonly logout = new EventEmitter<void>();

  protected _user!: User;
}
