import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ErrorViewComponent } from '../../views/error-view/error-view.component';
import { DeliveryOffersListComponent } from '../../components/delivery-offers-list/delivery-offers-list.component';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';
import { FilterByPlaceFieldQueryContainerComponent } from '@shared/components/filter-by-place-field-query-container/filter-by-place-field-query-container.component';
import { TextLinkComponent } from '@shared/components/text-link/text-link.component';
import { PlaceholderComponent } from '@shared/components/placeholder/placeholder.component';

import { OffersPageService } from './offers-page.service';

@Component({
  selector: 'pu-offers-page',
  templateUrl: './offers-page.component.html',
  styleUrls: ['../../styles/_applications-page.component.scss'],
  providers: [OffersPageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    TranslateModule,
    ErrorViewComponent,
    DeliveryOffersListComponent,
    SpinnerComponent,
    FilterByPlaceFieldQueryContainerComponent,
    TextLinkComponent,
    PlaceholderComponent,
  ],
})
export class OffersPageComponent implements OnInit {
  protected readonly _service = inject(OffersPageService);

  public ngOnInit(): void {
    this._service.fetchPublishedDeliveryOffers();
  }
}
