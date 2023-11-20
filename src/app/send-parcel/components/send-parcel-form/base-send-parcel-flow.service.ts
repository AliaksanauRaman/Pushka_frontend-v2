import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { HelpRequestsHttpService } from '@shared/http/help-requests/help-requests-http.service';
import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';

import { ValidSendParcelFormValue } from '@shared/types/valid-send-parcel-form-value';

@Injectable()
export abstract class BaseSendParcelFlowService {
  protected readonly _helpRequestsHttpService = inject(HelpRequestsHttpService);
  protected readonly _snackBarService = inject(SnackBarService);

  public abstract handleValidSendParcelFormSubmit(
    validFormValue: ValidSendParcelFormValue
  ): Observable<unknown>;
}
