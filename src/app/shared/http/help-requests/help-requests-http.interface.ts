import { Observable } from 'rxjs';

import { HelpRequestsList } from '@shared/types/help-request';
import { CreateHelpRequestDto } from '@shared/dtos/create-help-request.dto';

export interface IHelpRequestsHttpService {
  getPublished(): Observable<HelpRequestsList>;
  createOne(createHelpRequestDto: CreateHelpRequestDto): Observable<unknown>;
  deleteOne(helpRequestId: number): Observable<unknown>;
}
