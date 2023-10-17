import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  signal,
} from '@angular/core';

import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';

@Component({
  selector: 'pu-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IconButtonComponent],
})
export class ToolbarComponent {
  @Input()
  public set isSideMenuOpened(value: boolean) {
    this._isSideMenuOpened.set(value);
  }

  protected readonly _isSideMenuOpened = signal(false);
  protected readonly _menuButtonIconSrc = computed(() =>
    this._isSideMenuOpened()
      ? '/assets/icons/white-cross-icon.svg'
      : '/assets/icons/white-menu-icon.svg'
  );
  protected readonly _menuButtonIconAlt = computed(() =>
    this._isSideMenuOpened() ? 'Close' : 'Menu'
  );
  protected readonly _menuButtonAriaLabel = computed(() =>
    this._isSideMenuOpened() ? 'Close menu' : 'Open menu'
  );

  @Output()
  public readonly menuClick = new EventEmitter<void>();
}
