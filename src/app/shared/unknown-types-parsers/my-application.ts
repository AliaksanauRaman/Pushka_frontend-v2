import { z } from 'zod';

import { baseApplication } from './base-application';
import { MyApplicationType } from '@shared/enums/my-application-type.enum';
import { MyApplication } from '@shared/types/my-application';
import { Phone } from '@shared/types/phone';

export const myApplication = baseApplication
  .extend({
    type: z.enum([MyApplicationType.OFFER, MyApplicationType.REQUEST]),
  })
  .readonly()
  .transform(
    (data) =>
      new MyApplication(
        data.type,
        data.id,
        data.userId,
        data.departurePlace,
        data.destination,
        new Date(data.validityPeriodStart),
        new Date(data.validityPeriodEnd),
        data.description,
        data.fullName,
        data.email,
        data.phone !== null
          ? new Phone(data.phone.countryCode, data.phone.number)
          : null,
        data.status
      )
  );
