import { IDto } from '@shared/interfaces/dto';
import { ApplicationStatus } from '@shared/enums/application-status.enum';

export class DeleteApplicationDto implements IDto {
  constructor(public readonly status = ApplicationStatus.DELETED) {}

  public toMap() {
    return {
      status: this.status,
    };
  }
}
