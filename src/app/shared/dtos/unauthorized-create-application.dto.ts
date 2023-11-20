import { BaseCreateApplicationDto } from './base-create-application.dto';
import { Phone } from '@shared/types/phone';
import { ApplicationStatus } from '@shared/enums/application-status.enum';

export class UnauthorizedCreateApplicationDto extends BaseCreateApplicationDto {
  constructor(
    public readonly userId: number,
    departurePlaceId: number,
    destinationId: number,
    validityPeriodStart: Date,
    validityPeriodEnd: Date,
    description: string,
    fullName: string,
    email: string,
    phone: Phone | null,
    status: ApplicationStatus
  ) {
    super(
      departurePlaceId,
      destinationId,
      validityPeriodStart,
      validityPeriodEnd,
      description,
      fullName,
      email,
      phone,
      status
    );
  }

  public override toMap() {
    return {
      userId: this.userId,
      departurePlaceId: this.departurePlaceId,
      destinationId: this.destinationId,
      validityPeriodStart: this.validityPeriodStart,
      validityPeriodEnd: this.validityPeriodEnd,
      description: this.description,
      fullName: this.fullName,
      email: this.email,
      phone: this.phone?.toMap() || null,
      status: this.status,
    };
  }
}
