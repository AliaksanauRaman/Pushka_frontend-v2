import { IDto } from '@shared/interfaces/dto';
import { Phone } from '@shared/types/phone';
import { ApplicationStatus } from '@shared/enums/application-status.enum';

export class ApplicationDto implements IDto {
  constructor(
    public readonly departurePlaceId: number,
    public readonly destinationId: number,
    public readonly validityPeriodStart: Date,
    public readonly validityPeriodEnd: Date,
    public readonly description: string,
    public readonly fullName: string,
    public readonly email: string,
    public readonly phone: Phone | null,
    public readonly status: ApplicationStatus
  ) {}

  public toMap() {
    return {
      departurePlaceId: this.departurePlaceId,
      destinationId: this.destinationId,
      validityPeriodStart: this.validityPeriodStart,
      validityPeriodEnd: this.validityPeriodEnd,
      description: this.description,
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      status: this.status,
    };
  }
}
