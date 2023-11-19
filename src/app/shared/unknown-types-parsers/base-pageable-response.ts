import { z } from 'zod';

export const basePageableResponse = z.object({
  empty: z.boolean(),
  first: z.boolean(),
  last: z.boolean(),
  number: z.number(),
  numberOfElements: z.number(),
  size: z.number(),
  totalElements: z.number(),
  totalPages: z.number(),
});
