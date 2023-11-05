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

export class ApplicationsList {
  constructor(public readonly value: ReadonlyArray<Application>) {}

  public findById(id: number): Application {
    const foundApplication = this.value.find(
      (application) => application.id === id
    );

    if (foundApplication === undefined) {
      throw new Error(`No application is found by id: '${id}'!`);
    }

    return foundApplication;
  }
}
