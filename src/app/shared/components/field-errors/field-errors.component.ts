import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'pu-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf],
})
export class FieldErrorsComponent {
  @Input()
  public set errorMessage(value: string) {
    this._errorMessage.set(value);
  }

  protected readonly _errorMessage = signal('');
}
