import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'button[puIconButton]',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class IconButtonComponent {
  @HostBinding('attr.type')
  public get type(): string {
    return 'button';
  }

  @Input({ required: true })
  public set puAlt(value: string) {
    this._alt = value;
  }

  @Input({ required: true })
  public set puSrc(value: string) {
    this._src = value;
  }

  protected _alt = '';
  protected _src = '';
}
