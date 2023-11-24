import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { TranslateModule } from '@ngx-translate/core';

import { applicationCardFadeIn } from '@shared/animations/application-card-fade-in';
import { applicationCardSlideOut } from '@shared/animations/application-card-slide-out';

import { DeliveryOfferCardComponent } from '../delivery-offer-card/delivery-offer-card.component';
import { FilterByPlaceFieldComponent } from '@shared/components/filter-by-place-field/filter-by-place-field.component';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';

import { BaseApplicationsListComponent } from '../../base/base-applications-list/base-applications-list.component';
import { DeliveryOffer } from '@shared/types/delivery-offer';

@Component({
  selector: 'pu-delivery-offers-list',
  templateUrl: './delivery-offers-list.component.html',
  styleUrl: '../../styles/_applications-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInSlideOut', [
      transition(':enter', useAnimation(applicationCardFadeIn)),
      transition(':leave', useAnimation(applicationCardSlideOut)),
    ]),
  ],
  standalone: true,
  imports: [
    TranslateModule,
    DeliveryOfferCardComponent,
    FilterByPlaceFieldComponent,
    IconButtonComponent,
  ],
})
export class DeliveryOffersListComponent extends BaseApplicationsListComponent {
  @Input({ required: true })
  public set deliveryOffersList(value: ReadonlyArray<DeliveryOffer>) {
    this._deliveryOffersList.set(value);
  }

  @Output()
  public readonly deliveryOfferDeleted = new EventEmitter<DeliveryOffer>();

  protected readonly _deliveryOffersList = signal<ReadonlyArray<DeliveryOffer>>(
    []
  );
}
