import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';

import { SpinnerComponent } from '@shared/components/spinner/spinner.component';

@Component({
  selector: 'button[puAccentButton]',
  template: `
    @if (_isLoading()) {
      <pu-spinner class="spinner" size="medium"></pu-spinner>
    } @else {
      <ng-content></ng-content>
    }
  `,
  styleUrl: './accent-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SpinnerComponent],
})
export class AccentButtonComponent {
  @Input()
  public set isLoading(value: boolean) {
    this._isLoading.set(value);
  }

  protected readonly _isLoading = signal(false);
}
