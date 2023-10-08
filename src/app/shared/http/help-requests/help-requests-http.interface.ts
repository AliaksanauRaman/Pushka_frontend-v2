import { Observable } from 'rxjs';

import { CreateHelpRequestDto } from '@shared/dtos/create-help-request.dto';

export interface IHelpRequestsHttpService {
  getPublished(): Observable<unknown>;
  createOne(createHelpRequestDto: CreateHelpRequestDto): Observable<unknown>;
  deleteOne(helpRequestId: number): Observable<unknown>;
}
