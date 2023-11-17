import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';

@Component({
  selector: 'pu-field-hint',
  templateUrl: './field-hint.component.html',
  styleUrl: './field-hint.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FieldHintComponent {
  @Input()
  public set isMessageVisible(value: boolean) {
    this._isMessageVisible.set(value);
  }

  @Input({ required: true })
  public set message(value: string) {
    this._message.set(value);
  }

  protected readonly _isMessageVisible = signal(true);
  protected readonly _message = signal('');
}
