import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CardPlaceLabelPipe } from '../../pipes/card-place-label.pipe';
import { ApplicationDirective } from '../../directives/application/application.directive';

import { DATE_VIEW_FORMAT } from '../../dependencies/date-view-format';

import { Application } from '@shared/types/application';

@Component({
  selector: 'pu-delivery-offer-card-transportation-info',
  templateUrl: './delivery-offer-card-transportation-info.component.html',
  styleUrl: './delivery-offer-card-transportation-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgOptimizedImage, DatePipe, TranslateModule, CardPlaceLabelPipe],
  hostDirectives: [
    {
      directive: ApplicationDirective,
      inputs: ['application'],
    },
  ],
})
export class DeliveryOfferCardTransportationInfoComponent {
  protected readonly _application =
    inject<ApplicationDirective<Application>>(ApplicationDirective);
  protected readonly _dateViewFormat = inject(DATE_VIEW_FORMAT);
}
