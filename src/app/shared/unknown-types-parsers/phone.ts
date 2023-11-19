import { z } from 'zod';

export const phone = z
  .object({
    countryCode: z.string(),
    number: z.string(),
  })
  .strict()
  .readonly();
