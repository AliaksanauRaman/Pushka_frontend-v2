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
import { filter, tap } from 'rxjs';

import { ApplicationCardTagComponent } from '../application-card-tag/application-card-tag.component';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';

import { DeleteApplicationDialogHelperService } from '@shared/services/delete-application-dialog-helper/delete-application-dialog-helper.service';

import { MyApplicationType } from '@shared/enums/my-application-type.enum';

@Component({
  selector: 'pu-application-card-header',
  templateUrl: './application-card-header.component.html',
  styleUrl: './application-card-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ApplicationCardTagComponent, IconButtonComponent],
})
export class ApplicationCardHeaderComponent {
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _deleteApplicationDialogHelperService = inject(
    DeleteApplicationDialogHelperService
  );

  @Input()
  public set applicationType(value: MyApplicationType) {
    this._applicationType.set(value);
  }

  @Input()
  public set isApplicationExpired(value: boolean) {
    this._isApplicationExpired.set(value);
  }

  @Output()
  public readonly deletionConfirm = new EventEmitter<void>();

  protected readonly _applicationType = signal(MyApplicationType.OFFER);
  protected readonly _isApplicationExpired = signal(false);

  protected openDeleteApplicationDialog(): void {
    this._deleteApplicationDialogHelperService
      .openDialog()
      .pipe(
        filter((isConfirmed): isConfirmed is true => isConfirmed === true),
        tap(() => this.deletionConfirm.emit()),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }
}
