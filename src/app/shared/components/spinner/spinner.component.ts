import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  signal,
} from '@angular/core';

type SpinnerSize = 'small' | 'medium' | 'big';
type SpinnerColor = 'white' | 'primary';

@Component({
  selector: 'pu-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SpinnerComponent {
  @Input()
  public set size(value: SpinnerSize) {
    this._size.set(value);
  }

  @Input()
  public set color(value: SpinnerColor) {
    this._color.set(value);
  }

  @HostBinding('class')
  public get cssClass(): string {
    return `pu-spinner--${this._size()}`;
  }

  private readonly _size = signal<SpinnerSize>('small');
  protected readonly _color = signal<SpinnerColor>('white');
}
