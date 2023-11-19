import { z } from 'zod';

export const applicationPlace = z
  .object({
    cityLabel: z.string(),
    countryLabel: z.string(),
  })
  .strict()
  .readonly();
