import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { Select } from '@ngxs/store';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { AccountAvatarComponent } from '@shared/components/account-avatar/account-avatar.component';

import { User } from '@shared/types/user';
import { PwaState } from '@store/pwa';

@Component({
  selector: 'pu-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgTemplateOutlet,
    CdkMenuItem,
    TranslateModule,
    AccountAvatarComponent,
  ],
  // TODO: Looks like CdkMenu does not work this way
  hostDirectives: [{ directive: CdkMenu }],
})
export class MenuComponent {
  @Input({ required: true })
  public set user(value: User | null | undefined) {
    this._user.set(value);
  }

  @Output()
  public readonly update = new EventEmitter<void>();

  @Output()
  public readonly logout = new EventEmitter<void>();

  @Output()
  public readonly login = new EventEmitter<void>();

  @Select(PwaState.isAppUpdateAvailable)
  private readonly _isAppUpdateAvailable$!: Observable<boolean>;
  protected readonly _isAppUpdateAvailable = toSignal(
    this._isAppUpdateAvailable$
  );

  protected readonly _user = signal<User | null | undefined>(null);
}
