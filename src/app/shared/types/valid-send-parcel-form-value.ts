import { Place } from './place';
import { DateRange } from './date-range';
import { Phone } from './phone';
import { ApplicationStatus } from '@shared/enums/application-status.enum';
import { CreateHelpRequestDto } from '@shared/dtos/create-help-request.dto';

type RawSendParcelFormValue = Readonly<{
  departurePlace: Place | null;
  destination: Place | null;
  validityPeriod: DateRange | null;
  description: string;
  fullName: string;
  email: string;
  phone: Phone | null;
  allowedItemsConfirmation: boolean;
  noServiceResponsibilityConfirmation: boolean;
}>;

// TODO: Think about a better approach
export class ValidSendParcelFormValue {
  public readonly departurePlace: Place;
  public readonly destination: Place;
  public readonly validityPeriodStart: Date;
  public readonly validityPeriodEnd: Date;
  public readonly description: string;
  public readonly fullName: string;
  public readonly email: string;
  public readonly phone: Phone | null;
  public readonly allowedItemsConfirmation: boolean;
  public readonly noServiceResponsibilityConfirmation: boolean;

  constructor({
    departurePlace,
    destination,
    validityPeriod,
    description,
    fullName,
    email,
    phone,
    allowedItemsConfirmation,
    noServiceResponsibilityConfirmation,
  }: RawSendParcelFormValue) {
    this.departurePlace = departurePlace as Place;
    this.destination = destination as Place;
    this.validityPeriodStart = validityPeriod?.start as Date;
    this.validityPeriodEnd = validityPeriod?.end as Date;
    this.description = description;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.allowedItemsConfirmation = allowedItemsConfirmation;
    this.noServiceResponsibilityConfirmation =
      noServiceResponsibilityConfirmation;
  }

  public toCreateHelpRequestDto(
    status: ApplicationStatus
  ): CreateHelpRequestDto {
    return new CreateHelpRequestDto(
      this.departurePlace.id,
      this.destination.id,
      this.validityPeriodStart,
      this.validityPeriodEnd,
      this.description,
      this.fullName,
      this.email,
      this.phone,
      status
    );
  }
}
