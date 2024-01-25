import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  HostBinding,
  computed,
  inject,
} from '@angular/core';
import { tap } from 'rxjs';

import { ApplicationCardHeaderComponent } from '../application-card-header/application-card-header.component';
import { DeliveryOfferCardTransportationInfoComponent } from '../delivery-offer-card-transportation-info/delivery-offer-card-transportation-info.component';
import { HelpRequestCardTransportationInfoComponent } from '../help-request-card-transportation-info/help-request-card-transportation-info.component';
import { ApplicationCardCommentComponent } from '../application-card-comment/application-card-comment.component';
import { ApplicationCardUserDetailsComponent } from '../application-card-user-details/application-card-user-details.component';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';
import { ApplicationDirective } from '../../directives/application/application.directive';

import { DeleteDeliveryOfferService } from '../../services/delete-delivery-offer/delete-delivery-offer.service';
import { DeleteHelpRequestService } from '../../services/delete-help-request/delete-help-request.service';

import { MyApplication } from '@shared/types/my-application';
import { MyApplicationType } from '@shared/enums/my-application-type.enum';

@Component({
  selector: 'pu-my-application-card',
  templateUrl: './my-application-card.component.html',
  styleUrl: '../../styles/_application-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DeleteDeliveryOfferService, DeleteHelpRequestService],
  standalone: true,
  imports: [
    ApplicationCardHeaderComponent,
    DeliveryOfferCardTransportationInfoComponent,
    HelpRequestCardTransportationInfoComponent,
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
export class MyApplicationCardComponent {
  protected readonly _deleteDeliveryOffer = inject(DeleteDeliveryOfferService);
  protected readonly _deleteHelpRequest = inject(DeleteHelpRequestService);
  protected readonly _application =
    inject<ApplicationDirective<MyApplication>>(ApplicationDirective);

  @Output()
  public readonly deleted = new EventEmitter<void>();

  protected readonly _isDeleting = computed(
    () =>
      this._deleteDeliveryOffer.isDeleting() ||
      this._deleteHelpRequest.isDeleting()
  );

  @HostBinding('class.application-card--expired')
  public get hasApplicationCardExpiredClass(): boolean {
    return this._application.value()?.isExpired || false;
  }

  protected handleDeletionConfirm({ type, id }: MyApplication): void {
    if (type === MyApplicationType.OFFER) {
      this._deleteDeliveryOffer
        .deleteById(id)
        .pipe(tap(() => this.deleted.emit()))
        .subscribe();
    } else if (type === MyApplicationType.REQUEST) {
      this._deleteHelpRequest
        .deleteById(id)
        .pipe(tap(() => this.deleted.emit()))
        .subscribe();
    } else {
      throw new Error(`Unknown application type: '${type}'!`);
    }
  }
}
