import { z } from 'zod';

import { LoginResponseData } from '@shared/types/login-response-data';

export const loginResponseData = z
  .object({
    token: z.string(),
  })
  .strict()
  .readonly()
  .transform((data) => new LoginResponseData(data.token));
