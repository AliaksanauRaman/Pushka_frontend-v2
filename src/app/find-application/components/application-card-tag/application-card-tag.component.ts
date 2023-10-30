import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  computed,
  signal,
} from '@angular/core';

type TagType = 'my-delivery-offer' | 'my-help-request';

@Component({
  selector: 'pu-application-card-tag',
  templateUrl: './application-card-tag.component.html',
  styleUrls: ['./application-card-tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ApplicationCardTagComponent {
  @Input()
  public set type(value: TagType) {
    this._type.set(value);
  }

  @HostBinding('class.my-delivery-offer')
  public get hasMyDeliveryOfferClass(): boolean {
    return this._hasMyDeliveryOfferClass();
  }

  @HostBinding('class.my-help-request')
  public get hasMyHelpRequestClass(): boolean {
    return this._hasMyHelpRequestClass();
  }

  protected readonly _type = signal<TagType>('my-help-request');
  protected readonly _hasMyDeliveryOfferClass = computed(
    () => this._type() === 'my-delivery-offer'
  );
  protected readonly _hasMyHelpRequestClass = computed(
    () => this._type() === 'my-help-request'
  );
  protected readonly _text = computed(() =>
    this._type() === 'my-delivery-offer'
      ? 'Мое предложение помощи'
      : 'Мой запрос'
  );
}
