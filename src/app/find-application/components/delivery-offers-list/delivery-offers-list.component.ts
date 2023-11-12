import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnInit,
  Renderer2,
  inject,
  signal,
  effect,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ApplicationCardComponent } from '../application-card/application-card.component';
import { FilterByPlaceFieldComponent } from '@shared/components/filter-by-place-field/filter-by-place-field.component';
import { TextLinkComponent } from '@shared/components/text-link/text-link.component';
import { PlaceholderComponent } from '@shared/components/placeholder/placeholder.component';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';

import { MAX_SCROLL_TOP_TO_SHOW_FAB } from './delivery-offers-list.config';
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
    ApplicationCardComponent,
    FilterByPlaceFieldComponent,
    TextLinkComponent,
    PlaceholderComponent,
    IconButtonComponent,
  ],
})
export class DeliveryOffersListComponent implements OnInit {
  private readonly _ngZone = inject(NgZone);
  private readonly _hostElementRef: ElementRef<HTMLElement> =
    inject(ElementRef);
  private readonly _renderer2 = inject(Renderer2);
  private readonly _maxScrollTopToShowFab = inject(MAX_SCROLL_TOP_TO_SHOW_FAB);

  @Input({ required: true })
  public set deliveryOffersList(value: DeliveryOffersList) {
    this._deliveryOffersList.set(value);
  }

  protected readonly _deliveryOffersList = signal(new DeliveryOffersList([]));
  protected readonly _fabIsVisible = signal(false);
  // This effect is needed to trigger changes detection
  private readonly _fabIsVisibleChangesWatcher = effect(() =>
    this._fabIsVisible()
  );

  public ngOnInit(): void {
    this._ngZone.runOutsideAngular(() => {
      this._renderer2.listen(
        this._hostElementRef.nativeElement,
        'scroll',
        (_event: unknown) =>
          this._fabIsVisible.set(
            this._hostElementRef.nativeElement.scrollTop >=
              this._maxScrollTopToShowFab
          )
      );
    });
  }

  protected scrollToTop(): void {
    this._ngZone.runOutsideAngular(() => {
      this._hostElementRef.nativeElement.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
      });
    });
  }
}
