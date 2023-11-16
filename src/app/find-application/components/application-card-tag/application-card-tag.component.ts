import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  computed,
  signal,
} from '@angular/core';

import { MyApplicationType } from '@shared/enums/my-application-type.enum';

@Component({
  selector: 'pu-application-card-tag',
  template: '{{ _text() }}',
  styleUrl: './application-card-tag.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ApplicationCardTagComponent {
  @Input()
  public set applicationType(value: MyApplicationType) {
    this._type.set(value);
  }

  @HostBinding('class.my-delivery-offer')
  public get hasMyDeliveryOfferClass(): boolean {
    return this._type() === MyApplicationType.OFFER;
  }

  @HostBinding('class.my-help-request')
  public get hasMyHelpRequestClass(): boolean {
    return this._type() === MyApplicationType.REQUEST;
  }

  protected readonly _type = signal<MyApplicationType>(MyApplicationType.OFFER);
  protected readonly _text = computed(() =>
    this._type() === MyApplicationType.OFFER
      ? 'Мое предложение помощи'
      : 'Мой запрос'
  );
}
