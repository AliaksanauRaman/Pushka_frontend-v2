import { z } from 'zod';

import { basePageableResponse } from './base-pageable-response';
import { deliveryOffer } from './delivery-offer';
import { PageableData } from '@shared/types/pageable-data';

export const deliveryOffersPageableData = basePageableResponse
  .extend({
    content: z.array(deliveryOffer).readonly(),
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
