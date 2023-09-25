import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

import { DecodedTokenData } from '@shared/types/decoded-token-data';
import { decodedTokenData } from '@shared/unknown-types-parsers/decoded-token-data';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  public decode(token: string): DecodedTokenData {
    return decodedTokenData.parse(jwtDecode<unknown>(token));
  }
}
