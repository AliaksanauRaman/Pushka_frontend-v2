import { Phone } from './phone';
import { ApplicationStatus } from '@shared/enums/application-status.enum';

export class Application {
  constructor(
    public readonly id: number,
    public readonly userId: number,
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
}
