import { z } from 'zod';

import { Place } from '@shared/types/place';

export const placeResponseData = z
  .object({
    countryId: z.number(),
    countryLabel: z.string(),
    cityId: z.number(),
    cityLabel: z.string(),
  })
  .strict()
  .readonly();
export const allPlacesResponseData = z
  .array(placeResponseData)
  .readonly()
  .transform((data) =>
    data.map((item) =>
      Place.build(
        item.countryId,
        item.countryLabel,
        item.cityId,
        item.cityLabel
      )
    )
  );
