import { Observable } from 'rxjs';

import { FilterByPlaceValue } from '@shared/types/filter-by-place-value';
import { PageableData } from '@shared/types/pageable-data';
import { HelpRequest } from '@shared/types/help-request';
import { CreateHelpRequestDto } from '@shared/dtos/create-help-request.dto';

export interface IHelpRequestsHttpService {
  getPublished(
    filterValue: FilterByPlaceValue
  ): Observable<PageableData<HelpRequest>>;
  createOne(createHelpRequestDto: CreateHelpRequestDto): Observable<unknown>;
  deleteOne(helpRequestId: number): Observable<unknown>;
}
