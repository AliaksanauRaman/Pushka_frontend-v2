import { z } from 'zod';

export const errorWithCode = z
  .object({
    code: z.number(),
  })
  .readonly();
