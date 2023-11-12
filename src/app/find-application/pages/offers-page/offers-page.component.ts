import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';

import { DeliveryOffersListComponent } from '../../components/delivery-offers-list/delivery-offers-list.component';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';
import { FilterByPlaceFieldComponent } from '@shared/components/filter-by-place-field/filter-by-place-field.component';

import { OffersPageService } from './offers-page.service';

@Component({
  selector: 'pu-offers-page',
  templateUrl: './offers-page.component.html',
  styleUrls: ['../../styles/_applications-page.component.scss'],
  providers: [OffersPageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DeliveryOffersListComponent,
    SpinnerComponent,
    FilterByPlaceFieldComponent,
  ],
})
export class OffersPageComponent implements OnInit {
  protected readonly _service = inject(OffersPageService);

  public ngOnInit(): void {
    this._service.fetchPublishedDeliveryOffers();
  }
}
