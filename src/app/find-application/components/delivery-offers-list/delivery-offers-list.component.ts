import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { DeliveryOfferCardComponent } from '../delivery-offer-card/delivery-offer-card.component';
import { FilterByPlaceFieldComponent } from '@shared/components/filter-by-place-field/filter-by-place-field.component';
import { TextLinkComponent } from '@shared/components/text-link/text-link.component';
import { PlaceholderComponent } from '@shared/components/placeholder/placeholder.component';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';

import { BaseApplicationsListComponent } from '../../base/base-applications-list/base-applications-list.component';
import { DeliveryOffersList } from '@shared/types/delivery-offer';

@Component({
  selector: 'pu-delivery-offers-list',
  templateUrl: './delivery-offers-list.component.html',
  styleUrl: '../../styles/_applications-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    DeliveryOfferCardComponent,
    FilterByPlaceFieldComponent,
    TextLinkComponent,
    PlaceholderComponent,
    IconButtonComponent,
  ],
})
export class DeliveryOffersListComponent extends BaseApplicationsListComponent {
  @Input({ required: true })
  public set deliveryOffersList(value: DeliveryOffersList) {
    this._deliveryOffersList.set(value);
  }

  protected readonly _deliveryOffersList = signal(new DeliveryOffersList([]));
}
