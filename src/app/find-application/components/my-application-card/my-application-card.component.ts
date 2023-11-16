import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ApplicationCardHeaderComponent } from '../application-card-header/application-card-header.component';
import { DeliveryOfferCardTransportationInfoComponent } from '../delivery-offer-card-transportation-info/delivery-offer-card-transportation-info.component';
import { HelpRequestCardTransportationInfoComponent } from '../help-request-card-transportation-info/help-request-card-transportation-info.component';
import { ApplicationCardCommentComponent } from '../application-card-comment/application-card-comment.component';
import { ApplicationCardUserDetailsComponent } from '../application-card-user-details/application-card-user-details.component';
import { ApplicationDirective } from '../../directives/application/application.directive';

import { MyApplication } from '@shared/types/my-application';

@Component({
  selector: 'pu-my-application-card',
  templateUrl: './my-application-card.component.html',
  styleUrl: '../../styles/_application-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ApplicationCardHeaderComponent,
    DeliveryOfferCardTransportationInfoComponent,
    HelpRequestCardTransportationInfoComponent,
    ApplicationCardCommentComponent,
    ApplicationCardUserDetailsComponent,
  ],
  hostDirectives: [
    {
      directive: ApplicationDirective,
      inputs: ['application'],
    },
  ],
})
export class MyApplicationCardComponent {
  protected readonly _application =
    inject<ApplicationDirective<MyApplication>>(ApplicationDirective);
}
