import { z } from 'zod';

import { RegisterResponseData } from '@shared/types/register-response-data';

export const registerResponseData = z
  .object({
    userId: z.number(),
  })
  .strict()
  .readonly()
  .transform((data) => new RegisterResponseData(data.userId));
