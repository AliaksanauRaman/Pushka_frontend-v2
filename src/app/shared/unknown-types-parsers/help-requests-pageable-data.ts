import { z } from 'zod';

import { basePageableResponse } from './base-pageable-response';
import { helpRequest } from './help-request';
import { PageableData } from '@shared/types/pageable-data';

export const helpRequestsPageableData = basePageableResponse
  .extend({
    content: z.array(helpRequest).readonly(),
  })
  .readonly()
  .transform(
    (data) =>
      new PageableData(
        data.content,
        data.empty,
        data.first,
        data.last,
        data.number,
        data.numberOfElements,
        data.size,
        data.totalElements,
        data.totalPages
      )
  );
