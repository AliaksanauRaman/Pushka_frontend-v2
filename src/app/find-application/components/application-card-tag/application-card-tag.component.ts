import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  computed,
  signal,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { MyApplicationType } from '@shared/enums/my-application-type.enum';

@Component({
  selector: 'pu-application-card-tag',
  template: '{{ _text() | translate }}',
  styleUrl: './application-card-tag.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslateModule],
})
export class ApplicationCardTagComponent {
  @Input()
  public set applicationType(value: MyApplicationType) {
    this._type.set(value);
  }

  @Input()
  public set isDim(value: boolean) {
    this._isDim.set(value);
  }

  @HostBinding('class.my-delivery-offer')
  public get hasMyDeliveryOfferClass(): boolean {
    return this._type() === MyApplicationType.OFFER;
  }

  @HostBinding('class.my-help-request')
  public get hasMyHelpRequestClass(): boolean {
    return this._type() === MyApplicationType.REQUEST;
  }

  @HostBinding('class.my-application--dim')
  public get hasMyApplicationDimClass(): boolean {
    return this._isDim();
  }

  protected readonly _type = signal<MyApplicationType>(MyApplicationType.OFFER);
  private readonly _isDim = signal(false);

  protected readonly _text = computed(() =>
    this._type() === MyApplicationType.OFFER ? 'myOffer' : 'myRequest'
  );
}
