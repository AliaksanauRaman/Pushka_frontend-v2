import { baseApplication } from './base-application';
import { HelpRequest } from '@shared/types/help-request';
import { Phone } from '@shared/types/phone';

export const helpRequest = baseApplication
  .readonly()
  .transform(
    (data) =>
      new HelpRequest(
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
