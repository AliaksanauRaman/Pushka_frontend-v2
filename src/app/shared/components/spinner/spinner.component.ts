import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  computed,
  inject,
  signal,
} from '@angular/core';

import {
  SpinnerSize,
  SpinnerColor,
  SPINNER_DIMENSIONS,
  SPINNER_CONTAINER_DIMENSIONS,
  SPINNER_FILLS,
} from './spinner.component.config';

@Component({
  selector: 'pu-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SpinnerComponent {
  private readonly _spinnerDimensions = inject(SPINNER_DIMENSIONS);
  private readonly _spinnerContainerDimensions = inject(
    SPINNER_CONTAINER_DIMENSIONS
  );
  private readonly _spinnerFills = inject(SPINNER_FILLS);

  @Input()
  public set size(value: SpinnerSize) {
    this._size.set(value);
  }

  @Input()
  public set color(value: SpinnerColor) {
    this._color.set(value);
  }

  @HostBinding('style.width.px')
  public get cssWidthInPx(): number {
    return this._containerDimensions().width;
  }

  @HostBinding('style.height.px')
  public get cssHeightInPx(): number {
    return this._containerDimensions().height;
  }

  private readonly _size = signal<SpinnerSize>('small');
  private readonly _color = signal<SpinnerColor>('white');

  protected readonly _dimensions = computed(
    () => this._spinnerDimensions[this._size()]
  );
  protected readonly _containerDimensions = computed(
    () => this._spinnerContainerDimensions[this._size()]
  );
  protected readonly _fill = computed(() => this._spinnerFills[this._color()]);
}
