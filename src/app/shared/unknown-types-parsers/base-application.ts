import { z } from 'zod';

import { applicationPlace } from './application-place';
import { phone } from './phone';
import { ApplicationStatus } from '@shared/enums/application-status.enum';

export const baseApplication = z
  .object({
    id: z.number(),
    userId: z.number(),
    departurePlace: applicationPlace,
    destination: applicationPlace,
    validityPeriodStart: z.string(),
    validityPeriodEnd: z.string(),
    description: z.string(),
    fullName: z.string(),
    email: z.string(),
    phone: phone.nullable(),
    status: z.enum([
      ApplicationStatus.PUBLISHED,
      ApplicationStatus.PENDING,
      ApplicationStatus.DELETED,
    ]),
  })
  .strict();
