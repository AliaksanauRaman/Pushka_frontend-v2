import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { tap } from 'rxjs';

import { ApplicationCardHeaderComponent } from '../application-card-header/application-card-header.component';
import { DeliveryOfferCardTransportationInfoComponent } from '../delivery-offer-card-transportation-info/delivery-offer-card-transportation-info.component';
import { ApplicationCardCommentComponent } from '../application-card-comment/application-card-comment.component';
import { ApplicationCardUserDetailsComponent } from '../application-card-user-details/application-card-user-details.component';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';
import { ApplicationDirective } from '../../directives/application/application.directive';

import { DeleteDeliveryOfferService } from '../../services/delete-delivery-offer/delete-delivery-offer.service';

import { BaseApplicationCardComponent } from '../../base/base-application-card/base-application-card.component';
import { MyApplicationType } from '@shared/enums/my-application-type.enum';

@Component({
  selector: 'pu-delivery-offer-card',
  templateUrl: './delivery-offer-card.component.html',
  styleUrl: '../../styles/_application-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DeleteDeliveryOfferService],
  standalone: true,
  imports: [
    ApplicationCardHeaderComponent,
    DeliveryOfferCardTransportationInfoComponent,
    ApplicationCardCommentComponent,
    ApplicationCardUserDetailsComponent,
    SpinnerComponent,
  ],
  hostDirectives: [
    {
      directive: ApplicationDirective,
      inputs: ['application'],
    },
  ],
})
export class DeliveryOfferCardComponent extends BaseApplicationCardComponent {
  protected readonly _deleteDeliveryOffer = inject(DeleteDeliveryOfferService);

  protected readonly _type = MyApplicationType.OFFER;

  protected deleteDeliveryOffer(id: number): void {
    this._deleteDeliveryOffer
      .deleteById(id)
      .pipe(tap(() => this.deleted.emit()))
      .subscribe();
  }
}
