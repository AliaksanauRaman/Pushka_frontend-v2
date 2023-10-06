export abstract class BaseUserActivationError extends Error {
  public abstract readonly label: string;

  constructor(public readonly reason: string) {
    super(reason);
  }
}

/**
 * @description Should be used when token from the link is missing or empty.
 */
export class InvalidLinkError extends BaseUserActivationError {
  public override readonly label = 'activateUser.error.invalidLink';
}

/**
 * @description Should be used when no condition is met for any other known error.
 */
export class UnknownError extends BaseUserActivationError {
  public override readonly label = 'activateUser.error.unknown';

  constructor() {
    super('Unknown user activation error!');
  }
}
