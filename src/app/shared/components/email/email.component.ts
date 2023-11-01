import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
  computed,
} from '@angular/core';

import { TextLinkComponent } from '@shared/components/text-link/text-link.component';

@Component({
  selector: 'pu-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TextLinkComponent],
})
export class EmailComponent {
  @Input({ required: true })
  public set email(value: string) {
    this._email.set(value);
  }

  private readonly _email = signal('');

  protected readonly _emailHref = computed(() => {
    const email = this._email();
    return email === '' ? '' : `mailto:${email}`;
  });
  protected readonly _emailView = computed(() => {
    const email = this._email();
    return email === '' ? '' : email;
  });
}
