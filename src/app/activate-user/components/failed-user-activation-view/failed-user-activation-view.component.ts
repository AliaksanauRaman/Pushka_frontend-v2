import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';
import { NgIf } from '@angular/common';

import {
  BaseUserActivationError,
  UnknownError,
} from '../../user-activation-error';

@Component({
  selector: 'pu-failed-user-activation-view',
  templateUrl: './failed-user-activation-view.component.html',
  styleUrls: ['./failed-user-activation-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf],
})
export class FailedUserActivationViewComponent {
  @Input({ required: true })
  public set error(value: BaseUserActivationError) {
    this._error.set(value);
  }

  protected readonly _error = signal<BaseUserActivationError>(
    new UnknownError()
  );
}
