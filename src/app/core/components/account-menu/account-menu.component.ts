import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { TranslateModule } from '@ngx-translate/core';

import { AccountAvatarComponent } from '@shared/components/account-avatar/account-avatar.component';

// TODO: Not used
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
  public set userEmail(value: string) {
    this._userEmail.set(value);
  }

  @Output()
  public readonly logout = new EventEmitter<void>();

  protected readonly _userEmail = signal('');
}
