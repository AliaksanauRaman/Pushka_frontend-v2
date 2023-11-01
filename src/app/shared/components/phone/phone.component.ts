import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  signal,
} from '@angular/core';

import { TextLinkComponent } from '@shared/components/text-link/text-link.component';

import { Phone } from '@shared/types/phone';

@Component({
  selector: 'pu-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TextLinkComponent],
})
export class PhoneComponent {
  @Input({ required: true })
  public set phone(value: Phone) {
    this._phone.set(value);
  }

  private readonly _phone = signal<Phone | null>(null);

  protected readonly _phoneHref = computed(() => {
    const phone = this._phone();
    return phone === null ? '' : `tel:${phone.countryCode}${phone.number}`;
  });
  protected readonly _phoneView = computed(() => {
    const phone = this._phone();
    return phone === null ? '' : `${phone.countryCode} ${phone.number}`;
  });
}
