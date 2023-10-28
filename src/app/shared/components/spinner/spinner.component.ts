import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  computed,
  inject,
  signal,
} from '@angular/core';

import { SpinnerSize } from './spinner-size';
import {
  SPINNER_DIMENSIONS,
  SPINNER_CONTAINER_DIMENSIONS,
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

  @Input()
  public set size(value: SpinnerSize) {
    this._size.set(value);
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

  protected readonly _dimensions = computed(
    () => this._spinnerDimensions[this._size()]
  );
  protected readonly _containerDimensions = computed(
    () => this._spinnerContainerDimensions[this._size()]
  );
}
