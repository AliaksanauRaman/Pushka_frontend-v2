import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  signal,
} from '@angular/core';
import { NgIf } from '@angular/common';

import { SpinnerComponent } from '@shared/components/spinner/spinner.component';

@Component({
  selector: 'button[puAccentButton]',
  templateUrl: './accent-button.component.html',
  styleUrls: ['./accent-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, SpinnerComponent],
})
export class AccentButtonComponent {
  @Input()
  public set isLoading(value: boolean) {
    this._isLoading.set(value);
  }

  @HostBinding('attr.disabled')
  public get hasDisabledAttr(): true | null {
    return this._isLoading() ? true : null;
  }

  protected readonly _isLoading = signal(false);
}
