import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'pu-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class EmailComponent {
  @Input({ required: true })
  public set email(value: string) {
    this._email.set(value);
  }

  private readonly _email = signal('');

  public readonly emailHref = computed(() => {
    const email = this._email();
    return email === '' ? '' : `mailto:${email}`;
  });
  public readonly emailView = computed(() => {
    const email = this._email();
    return email === '' ? '' : email;
  });
}
