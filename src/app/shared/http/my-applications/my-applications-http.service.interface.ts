import { Observable } from "rxjs";

import { MyApplicationOptionType } from "@shared/enums/my-application-option-type.enum";
import { PageableData } from "@shared/types/pageable-data";
import { MyApplication } from "@shared/types/my-application";

export interface IMyApplicationsHttpService {
  get(type: MyApplicationOptionType): Observable<PageableData<MyApplication>>;
}
