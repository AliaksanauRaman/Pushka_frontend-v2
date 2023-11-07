import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { IUsersHttpService } from './users-http.service.interface';
import { RegisterDto } from '@shared/dtos/register.dto';
import { RegisterResponseData } from '@shared/types/register-response-data';

@Injectable()
export class UsersHttpServiceMock implements IUsersHttpService {
  public register(_registerDto: RegisterDto): Observable<RegisterResponseData> {
    return of(new RegisterResponseData(1)).pipe(delay(1000));
  }
}
