import { BaseUserActivationError } from './user-activation-error';

export abstract class BaseUserActivation {
  public checkIsSuccessful(): this is SuccessfulUserActivation {
    return false;
  }

  public checkIsFailed(): this is FailedUserActivation {
    return false;
  }
}

export class SuccessfulUserActivation extends BaseUserActivation {
  public override checkIsSuccessful(): this is SuccessfulUserActivation {
    return true;
  }
}

export class FailedUserActivation extends BaseUserActivation {
  constructor(public readonly error: BaseUserActivationError) {
    super();
  }

  public override checkIsFailed(): this is FailedUserActivation {
    return true;
  }
}
