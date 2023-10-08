import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CreateDeliveryOfferFormComponent } from '../../components/create-delivery-offer-form/create-delivery-offer-form.component';

@Component({
  selector: 'pu-deliver-parcel-page',
  templateUrl: './deliver-parcel-page.component.html',
  styleUrls: ['./deliver-parcel-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CreateDeliveryOfferFormComponent],
})
export class DeliverParcelPageComponent {}
