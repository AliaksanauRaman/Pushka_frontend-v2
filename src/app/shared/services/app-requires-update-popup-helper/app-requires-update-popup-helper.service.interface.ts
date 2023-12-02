import { Observable } from "rxjs";

export interface IAppRequiresUpdatePopupHelperService {
  openPopup(): Observable<unknown>;
}
