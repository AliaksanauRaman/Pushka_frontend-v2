import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { IHelpRequestsHttpService } from './help-requests-http.interface';
import { FilterByPlaceValue } from '@shared/types/filter-by-place-value';
import { PageableData } from '@shared/types/pageable-data';
import { HelpRequest } from '@shared/types/help-request';
import { ApplicationStatus } from '@shared/enums/application-status.enum';
import { AuthorizedCreateHelpRequestDto } from '@shared/dtos/authorized-create-help-request.dto';
import { UnauthorizedCreateHelpRequestDto } from '@shared/dtos/unauthorized-create-help-request.dto';

const MOCK_HELP_REQUEST = new HelpRequest(
  1,
  28244,
  { cityLabel: 'city.belarus.minsk', countryLabel: 'country.belarus' },
  { cityLabel: 'city.poland.warsaw', countryLabel: 'country.poland' },
  new Date(),
  new Date(),
  'Some description Some description Some description Some description Some description Some description Some description Some description Some description Some description Some description Some description Some description Some description Some description Some description Some description Some description ',
  'Raman Aliaksanau',
  'raman.aliaksanau@gmail.com',
  null,
  ApplicationStatus.PUBLISHED
);

@Injectable()
export class HelpRequestsHttpServiceMock implements IHelpRequestsHttpService {
  public getPublished(
    _filterValue: FilterByPlaceValue
  ): Observable<PageableData<HelpRequest>> {
    const data: Array<HelpRequest> = [];

    for (let index = 0; index < 20; index++) {
      data.push({
        ...MOCK_HELP_REQUEST,
        id: index + 1,
      });
    }

    return of(
      new PageableData(
        data,
        data.length === 0,
        true,
        true,
        0,
        data.length,
        data.length,
        data.length,
        1
      )
    ).pipe(delay(200));
  }

  public authorizedCreateOne(
    _dto: AuthorizedCreateHelpRequestDto
  ): Observable<unknown> {
    throw new Error('Method not implemented.');
  }

  public unauthorizedCreateOne(
    _dto: UnauthorizedCreateHelpRequestDto
  ): Observable<unknown> {
    throw new Error('Method not implemented.');
  }

  public deleteOne(_helpRequestId: number): Observable<unknown> {
    return of(null).pipe(delay(3000));
  }
}
