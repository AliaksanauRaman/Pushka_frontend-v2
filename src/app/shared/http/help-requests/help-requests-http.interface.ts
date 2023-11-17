import { Observable } from 'rxjs';

import { FilterByPlaceValue } from '@shared/types/filter-by-place-value';
import { HelpRequestsList } from '@shared/types/help-request';
import { CreateHelpRequestDto } from '@shared/dtos/create-help-request.dto';

export interface IHelpRequestsHttpService {
  getPublished(filterValue: FilterByPlaceValue): Observable<HelpRequestsList>;
  createOne(createHelpRequestDto: CreateHelpRequestDto): Observable<unknown>;
  deleteOne(helpRequestId: number): Observable<unknown>;
}
