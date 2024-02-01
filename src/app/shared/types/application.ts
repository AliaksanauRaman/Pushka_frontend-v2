import { checkIsDateEarlierThan } from '@shared/utils/check-is-date-earlier-than';
import { ApplicationPlace } from './application-place';
import { Phone } from './phone';
import { ApplicationStatus } from '@shared/enums/application-status.enum';

export abstract class Application {
  public readonly isExpired: boolean;

  constructor(
    public readonly id: number,
    public readonly userId: number,
    public readonly departurePlace: ApplicationPlace,
    public readonly destination: ApplicationPlace,
    public readonly validityPeriodStart: Date,
    public readonly validityPeriodEnd: Date,
    public readonly description: string,
    public readonly fullName: string,
    public readonly email: string,
    public readonly phone: Phone | null,
    public readonly status: ApplicationStatus
  ) {
    this.isExpired = checkIsDateEarlierThan(this.validityPeriodEnd, new Date());
  }
}

export class ApplicationsList<T extends Application> {
  constructor(public readonly value: ReadonlyArray<T>) {}

  public findById(id: number): T {
    const foundApplication = this.value.find(
      (application) => application.id === id
    );

    if (foundApplication === undefined) {
      throw new Error(`No application is found by id: '${id}'!`);
    }

    return foundApplication;
  }
}
