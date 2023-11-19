import { z } from 'zod';

import { basePageableResponse } from './base-pageable-response';
import { myApplication } from './my-application';
import { PageableData } from '@shared/types/pageable-data';

export const myApplicationsPageableData = basePageableResponse
  .extend({
    content: z.array(myApplication).readonly(),
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
