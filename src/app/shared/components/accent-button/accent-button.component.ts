import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';
import { NgIf } from '@angular/common';

import { SpinnerComponent } from '@shared/components/spinner/spinner.component';
import { DisabledDirective } from '@shared/directives/disabled.directive';

@Component({
  selector: 'button[puAccentButton]',
  templateUrl: './accent-button.component.html',
  styleUrls: ['./accent-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, SpinnerComponent],
  hostDirectives: [
    {
      directive: DisabledDirective,
      inputs: ['disabled'],
    },
  ],
})
export class AccentButtonComponent {
  @Input()
  public set isLoading(value: boolean) {
    this._isLoading.set(value);
  }

  protected readonly _isLoading = signal(false);
}
