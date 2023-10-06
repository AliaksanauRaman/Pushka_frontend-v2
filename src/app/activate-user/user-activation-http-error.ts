import { BaseUserActivationError } from './user-activation-error';

export abstract class BaseUserActivationHttpError extends BaseUserActivationError {}

/**
 * @description Should be used when the provided token is not found.
 * Which may mean that it does not exist or has already been activated before.
 */
export class TokenIsNotFoundError extends BaseUserActivationHttpError {
  public override readonly label = 'activateUser.httpError.tokenIsNotFound';

  constructor() {
    super('Token does not exist or has already been activated before!');
  }
}

/**
 * @description Should be used when the provided token is expired.
 */
export class TokenIsExpiredError extends BaseUserActivationHttpError {
  public override readonly label = 'activateUser.httpError.tokenIsExpired';

  constructor() {
    super('Token is expired!');
  }
}

/**
 * @description Should be used when no condition is met for any other known http error.
 */
export class UnknownHttpError extends BaseUserActivationHttpError {
  public override readonly label = 'activateUser.httpError.unknown';

  constructor() {
    super('Unknown user activation http error!');
  }
}
