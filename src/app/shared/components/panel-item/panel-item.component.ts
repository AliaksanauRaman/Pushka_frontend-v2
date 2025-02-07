import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  signal,
} from '@angular/core';

@Component({
  selector: '[puPanelItem]',
  template: '<ng-content></ng-content>',
  styleUrl: './panel-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PanelItemComponent {
  @Input()
  public set isPlaceholder(value: boolean) {
    this._isPlaceholder.set(value);
  }

  @Input()
  public set isSelected(value: boolean) {
    this._isSelected.set(value);
  }

  @HostBinding('class.pu-panel-item--placeholder')
  public get hasPuPanelItemPlaceholderClass(): boolean {
    return this._isPlaceholder();
  }

  @HostBinding('class.pu-panel-item--selected')
  public get hasPuPanelItemSelectedClass(): boolean {
    return this._isSelected();
  }

  protected readonly _isPlaceholder = signal(false);
  protected readonly _isSelected = signal(false);
}
