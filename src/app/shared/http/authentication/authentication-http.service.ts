import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { BaseHttpService } from '@shared/base/base-http.service';
import { LoginDto } from '@shared/dtos/login.dto';
import { LoginResponseData } from '@shared/types/login-response-data';
import { loginResponseData } from '@shared/unknown-types-parsers/login-response-data';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationHttpService extends BaseHttpService {
  public login(loginDto: LoginDto): Observable<LoginResponseData> {
    return this._httpClient
      .post<unknown>(`${this._apiUrl}/api/login`, loginDto.toMap())
      .pipe(map((responseData) => loginResponseData.parse(responseData)));
  }
}
