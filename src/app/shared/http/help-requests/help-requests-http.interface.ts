import { Observable } from 'rxjs';

import { FilterByPlaceValue } from '@shared/types/filter-by-place-value';
import { PageableData } from '@shared/types/pageable-data';
import { HelpRequest } from '@shared/types/help-request';
import { AuthorizedCreateHelpRequestDto } from '@shared/dtos/authorized-create-help-request.dto';
import { UnauthorizedCreateHelpRequestDto } from '@shared/dtos/unauthorized-create-help-request.dto';

export interface IHelpRequestsHttpService {
  getPublished(
    filterValue: FilterByPlaceValue
  ): Observable<PageableData<HelpRequest>>;
  authorizedCreateOne(dto: AuthorizedCreateHelpRequestDto): Observable<unknown>;
  unauthorizedCreateOne(
    dto: UnauthorizedCreateHelpRequestDto
  ): Observable<unknown>;
  deleteOne(helpRequestId: number): Observable<unknown>;
}
