import { Observable } from 'rxjs';

import { ConfirmPopupResult } from '@shared/types/confirm-popup-result';

export interface IAppUpdateIsAvailablePopupHelperService {
  openPopup(): Observable<ConfirmPopupResult>;
}
