import { Observable } from "rxjs";

import { MyApplicationsList } from "@shared/types/my-application";

export interface IMyApplicationsHttpService {
  getAll(): Observable<MyApplicationsList>;
}
