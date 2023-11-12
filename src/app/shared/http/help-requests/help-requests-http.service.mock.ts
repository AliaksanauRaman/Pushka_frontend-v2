import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { IHelpRequestsHttpService } from './help-requests-http.interface';
import { HelpRequest, HelpRequestsList } from '@shared/types/help-request';
import { ApplicationStatus } from '@shared/enums/application-status.enum';
import { CreateHelpRequestDto } from '@shared/dtos/create-help-request.dto';

const MOCK_HELP_REQUEST = new HelpRequest(
  1,
  1,
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
  public getPublished(): Observable<HelpRequestsList> {
    return of(new HelpRequestsList(new Array(10).fill(MOCK_HELP_REQUEST))).pipe(
      delay(1000)
    );
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
