import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  signal,
} from '@angular/core';

@Component({
  selector: '[puDialogTabItem]',
  template: '<ng-content></ng-content>',
  styleUrl: './dialog-tab-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DialogTabItemComponent {
  @Input()
  public set isActive(value: boolean) {
    this._isActive.set(value);
  }

  @HostBinding('class.pu-dialog-tab-item--active')
  public get hasActiveClass(): boolean {
    return this._isActive();
  }

  private readonly _isActive = signal(false);
}
