import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  signal,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'pu-account-avatar',
  template: `
    <img
      class="avatar-icon"
      ngSrc="/assets/icons/user.svg"
      alt="Avatar"
      width="24"
      height="24"
    />
  `,
  styleUrl: './account-avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgOptimizedImage],
})
export class AccountAvatarComponent {
  @Input()
  public set isTransparent(value: boolean) {
    this._isTransparent.set(value);
  }

  @HostBinding('class.account-avatar--transparent')
  public get hasAccountAvatarTransparentClass(): boolean {
    return this._isTransparent();
  }

  private readonly _isTransparent = signal(false);
}
