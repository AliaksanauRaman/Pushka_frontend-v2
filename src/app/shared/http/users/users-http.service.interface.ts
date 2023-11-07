import { Observable } from 'rxjs';

import { RegisterDto } from '@shared/dtos/register.dto';
import { RegisterResponseData } from '@shared/types/register-response-data';

export interface IUsersHttpService {
  register(registerDto: RegisterDto): Observable<RegisterResponseData>;
}
