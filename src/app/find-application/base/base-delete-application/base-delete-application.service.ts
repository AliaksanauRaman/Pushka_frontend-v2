import { DestroyRef, Injectable, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';

import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';

@Injectable()
export abstract class BaseDeleteApplicationService<T = unknown> {
  protected readonly _destroyRef = inject(DestroyRef);
  protected readonly _snackBarService = inject(SnackBarService);

  public readonly isDeleting = signal(false);

  public abstract deleteById(id: number): Observable<T>;
}
