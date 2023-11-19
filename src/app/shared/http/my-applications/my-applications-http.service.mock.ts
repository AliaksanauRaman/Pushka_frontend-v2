import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { IMyApplicationsHttpService } from './my-applications-http.service.interface';
import { PageableData } from '@shared/types/pageable-data';
import { MyApplication } from '@shared/types/my-application';
import { MyApplicationType } from '@shared/enums/my-application-type.enum';
import { ApplicationStatus } from '@shared/enums/application-status.enum';

const OFFER = new MyApplication(
  MyApplicationType.OFFER,
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

const REQUEST = new MyApplication(
  MyApplicationType.REQUEST,
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
export class MyApplicationsHttpServiceMock
  implements IMyApplicationsHttpService
{
  public get(): Observable<PageableData<MyApplication>> {
    const data = [
      OFFER,
      REQUEST,
      OFFER,
      REQUEST,
      OFFER,
      REQUEST,
      OFFER,
      OFFER,
      REQUEST,
      OFFER,
      REQUEST,
      OFFER,
      REQUEST,
      OFFER,
    ];

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
}
