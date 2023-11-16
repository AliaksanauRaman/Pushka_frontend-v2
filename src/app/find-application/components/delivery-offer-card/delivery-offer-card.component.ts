import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
  signal,
} from '@angular/core';

import { ApplicationCardHeaderComponent } from '../application-card-header/application-card-header.component';
import { DeliveryOfferCardTransportationInfoComponent } from '../delivery-offer-card-transportation-info/delivery-offer-card-transportation-info.component';
import { ApplicationCardCommentComponent } from '../application-card-comment/application-card-comment.component';
import { ApplicationCardUserDetailsComponent } from '../application-card-user-details/application-card-user-details.component';
import { ApplicationDirective } from '../../directives/application/application.directive';

import { Application } from '@shared/types/application';
import { MyApplicationType } from '@shared/enums/my-application-type.enum';

@Component({
  selector: 'pu-delivery-offer-card',
  templateUrl: './delivery-offer-card.component.html',
  styleUrl: '../../styles/_application-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ApplicationCardHeaderComponent,
    DeliveryOfferCardTransportationInfoComponent,
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
export class DeliveryOfferCardComponent {
  protected readonly _application =
    inject<ApplicationDirective<Application>>(ApplicationDirective);

  @Input()
  public set isMine(value: boolean) {
    this._isMine.set(value);
  }

  protected readonly _isMine = signal(false);
  protected readonly _type = MyApplicationType.OFFER;
}
