import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { PlaceholderComponent } from '@shared/components/placeholder/placeholder.component';
import { AccentButtonComponent } from '@shared/components/accent-button/accent-button.component';

@Component({
  selector: 'pu-error-view',
  templateUrl: './error-view.component.html',
  styleUrl: './error-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslateModule, PlaceholderComponent, AccentButtonComponent],
})
export class ErrorViewComponent {
  @Input()
  public set errorMessage(value: string) {
    this._errorMessage.set(value);
  }

  @Output()
  public readonly reload = new EventEmitter<void>();

  protected readonly _errorMessage = signal('');
}
