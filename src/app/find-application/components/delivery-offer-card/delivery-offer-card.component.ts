import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  Output,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, finalize, tap, throwError } from 'rxjs';

import { ApplicationCardHeaderComponent } from '../application-card-header/application-card-header.component';
import { DeliveryOfferCardTransportationInfoComponent } from '../delivery-offer-card-transportation-info/delivery-offer-card-transportation-info.component';
import { ApplicationCardCommentComponent } from '../application-card-comment/application-card-comment.component';
import { ApplicationCardUserDetailsComponent } from '../application-card-user-details/application-card-user-details.component';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';
import { ApplicationDirective } from '../../directives/application/application.directive';

import { DeliveryOffersHttpService } from '@shared/http/delivery-offers/delivery-offers-http.service';
import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';

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
    SpinnerComponent,
  ],
  hostDirectives: [
    {
      directive: ApplicationDirective,
      inputs: ['application'],
    },
  ],
})
export class DeliveryOfferCardComponent {
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _deliveryOffersHttpService = inject(
    DeliveryOffersHttpService
  );
  private readonly _snackBarService = inject(SnackBarService);
  protected readonly _application =
    inject<ApplicationDirective<Application>>(ApplicationDirective);

  @Input()
  public set isMine(value: boolean) {
    this._isMine.set(value);
  }

  @Output()
  public readonly deleted = new EventEmitter<void>();

  protected readonly _isMine = signal(false);
  protected readonly _type = MyApplicationType.OFFER;
  protected readonly _isDeleting = signal(false);

  protected deleteDeliveryOffer(id: number): void {
    this._isDeleting.set(true);

    this._deliveryOffersHttpService
      .deleteOne(id)
      .pipe(
        tap(() => this.deleted.emit()),
        catchError((error: unknown) => {
          this._snackBarService.showErrorMessage(
            'backendError.unknownDeliveryOfferDeletionError'
          );
          return throwError(() => error);
        }),
        finalize(() => this._isDeleting.set(false)),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }
}
