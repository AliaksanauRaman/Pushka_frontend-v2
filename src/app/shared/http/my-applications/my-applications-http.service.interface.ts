import { Observable } from "rxjs";

import { MyApplicationOptionType } from "@shared/enums/my-application-option-type.enum";
import { MyApplicationsList } from "@shared/types/my-application";

export interface IMyApplicationsHttpService {
  getAll(type: MyApplicationOptionType): Observable<MyApplicationsList>;
}
