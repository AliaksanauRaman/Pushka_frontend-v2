import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { IMyApplicationsHttpService } from './my-applications-http.service.interface';
import {
  MyApplication,
  MyApplicationsList,
} from '@shared/types/my-application';
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
  public getAll(): Observable<MyApplicationsList> {
    return of(
      new MyApplicationsList([
        OFFER,
        REQUEST,
        OFFER,
        REQUEST,
        OFFER,
        REQUEST,
        OFFER,
        REQUEST,
        OFFER,
        REQUEST,
      ])
    ).pipe(delay(1500));
  }
}
