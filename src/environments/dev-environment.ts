import { BaseEnvironment } from './base-environment';

export class DevEnvironment extends BaseEnvironment {
  public override readonly isProduction = false;
  public override readonly apiUrl = 'https://pushka-backend.herokuapp.com';
}

export const environment = new DevEnvironment();
