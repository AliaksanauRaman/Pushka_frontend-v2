import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { IHelpRequestsHttpService } from './help-requests-http.interface';
import { FilterByPlaceValue } from '@shared/types/filter-by-place-value';
import { PageableData } from '@shared/types/pageable-data';
import { HelpRequest } from '@shared/types/help-request';
import { ApplicationStatus } from '@shared/enums/application-status.enum';
import { CreateHelpRequestDto } from '@shared/dtos/create-help-request.dto';

const MOCK_HELP_REQUEST = new HelpRequest(
  1,
  28244,
  { cityLabel: 'city.belarus.minsk', countryLabel: 'country.belarus' },
  { cityLabel: 'city.poland.warsaw', countryLabel: 'country.poland' },
  new Date(),
  new Date(),
  'Some description',
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
    const data = new Array(20).fill(MOCK_HELP_REQUEST);

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
    ).pipe(delay(1000));
  }

  public createOne(
    _createHelpRequestDto: CreateHelpRequestDto
  ): Observable<unknown> {
    throw new Error('Method not implemented.');
  }

  public deleteOne(_helpRequestId: number): Observable<unknown> {
    throw new Error('Method not implemented.');
  }
}
