import { baseApplication } from './base-application';
import { DeliveryOffer } from '@shared/types/delivery-offer';
import { Phone } from '@shared/types/phone';

export const deliveryOffer = baseApplication
  .readonly()
  .transform(
    (data) =>
      new DeliveryOffer(
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
