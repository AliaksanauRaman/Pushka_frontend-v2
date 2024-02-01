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
  template: `
    <a puTextLink [isDim]="_isDim()" [href]="_emailHref()">
      {{ _emailView() }}
    </a>
  `,
  styles: `
    :host {
      display: inline;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TextLinkComponent],
})
export class EmailComponent {
  @Input({ required: true })
  public set email(value: string) {
    this._email.set(value);
  }

  @Input()
  public set isDim(value: boolean) {
    this._isDim.set(value);
  }

  private readonly _email = signal('');
  protected readonly _isDim = signal(false);

  protected readonly _emailHref = computed(() => {
    const email = this._email();
    return email === '' ? '' : `mailto:${email}`;
  });
  protected readonly _emailView = computed(() => {
    const email = this._email();
    return email === '' ? '' : email;
  });
}
