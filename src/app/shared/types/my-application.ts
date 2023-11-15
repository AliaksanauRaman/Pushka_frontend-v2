import { Application, ApplicationsList } from './application';
import { ApplicationPlace } from './application-place';
import { Phone } from './phone';
import { MyApplicationType } from '@shared/enums/my-application-type.enum';
import { ApplicationStatus } from '@shared/enums/application-status.enum';

export class MyApplication extends Application {
  constructor(
    public readonly type: MyApplicationType,
    id: number,
    userId: number,
    departurePlace: ApplicationPlace,
    destination: ApplicationPlace,
    validityPeriodStart: Date,
    validityPeriodEnd: Date,
    description: string,
    fullName: string,
    email: string,
    phone: Phone | null,
    status: ApplicationStatus
  ) {
    super(
      id,
      userId,
      departurePlace,
      destination,
      validityPeriodStart,
      validityPeriodEnd,
      description,
      fullName,
      email,
      phone,
      status
    );
  }
}

export class MyApplicationsList extends ApplicationsList<MyApplication> {}
