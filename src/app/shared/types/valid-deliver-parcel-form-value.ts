import { Place } from './place';
import { DateRange } from './date-range';
import { Phone } from './phone';
import { ApplicationStatus } from '@shared/enums/application-status.enum';
import { AuthorizedCreateDeliveryOfferDto } from '@shared/dtos/authorized-create-delivery-offer.dto';
import { UnauthorizedCreateDeliveryOfferDto } from '@shared/dtos/unauthorized-create-delivery-offer.dto';

type RawDeliverParcelFormValue = Readonly<{
  departurePlace: Place | null;
  destination: Place | null;
  departureAndArrivalDates: DateRange | null;
  description: string;
  fullName: string;
  email: string;
  phone: Phone | null;
  allowedItemsConfirmation: boolean;
  noServiceResponsibilityConfirmation: boolean;
}>;

// TODO: Think about a better approach
export class ValidDeliverParcelFormValue {
  public readonly departurePlace: Place;
  public readonly destination: Place;
  public readonly departureDate: Date;
  public readonly arrivalDate: Date;
  public readonly description: string;
  public readonly fullName: string;
  public readonly email: string;
  public readonly phone: Phone | null;
  public readonly allowedItemsConfirmation: boolean;
  public readonly noServiceResponsibilityConfirmation: boolean;

  constructor({
    departurePlace,
    destination,
    departureAndArrivalDates,
    description,
    fullName,
    email,
    phone,
    allowedItemsConfirmation,
    noServiceResponsibilityConfirmation,
  }: RawDeliverParcelFormValue) {
    this.departurePlace = departurePlace as Place;
    this.destination = destination as Place;
    this.departureDate = departureAndArrivalDates?.start as Date;
    this.arrivalDate = departureAndArrivalDates?.end as Date;
    this.description = description;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.allowedItemsConfirmation = allowedItemsConfirmation;
    this.noServiceResponsibilityConfirmation =
      noServiceResponsibilityConfirmation;
  }

  public toAuthorizedDto(): AuthorizedCreateDeliveryOfferDto {
    return new AuthorizedCreateDeliveryOfferDto(
      this.departurePlace.id,
      this.destination.id,
      this.departureDate,
      this.arrivalDate,
      this.description,
      this.fullName,
      this.email,
      this.phone,
      ApplicationStatus.PUBLISHED
    );
  }

  public toUnauthorizedDto(userId: number): UnauthorizedCreateDeliveryOfferDto {
    return new UnauthorizedCreateDeliveryOfferDto(
      userId,
      this.departurePlace.id,
      this.destination.id,
      this.departureDate,
      this.arrivalDate,
      this.description,
      this.fullName,
      this.email,
      this.phone,
      ApplicationStatus.PENDING
    );
  }
}
