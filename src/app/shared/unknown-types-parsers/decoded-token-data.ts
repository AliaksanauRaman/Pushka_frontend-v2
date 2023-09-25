import { z } from 'zod';

import { UserRole } from '@shared/enums/user-role.enum';
import { DecodedTokenData } from '@shared/types/decoded-token-data';

export const decodedTokenData = z
  .object({
    id: z.number(),
    sub: z.string(),
    permissions: z
      .tuple([
        z
          .object({
            authority: z.enum([UserRole.USER, UserRole.ADMIN]),
          })
          .strict()
          .readonly(),
      ])
      .readonly(),
    exp: z.number(),
    iat: z.number(),
  })
  .strict()
  .readonly()
  .transform((data) => {
    return new DecodedTokenData(
      data.id,
      data.sub,
      data.permissions[0].authority,
      data.exp,
      data.iat
    );
  });
