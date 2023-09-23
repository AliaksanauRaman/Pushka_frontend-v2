import { BaseEnvironment } from './base-environment';

export class ProdEnvironment extends BaseEnvironment {
  public override readonly isProduction = true;
  public override readonly apiUrl = 'https://pushka-backend.herokuapp.com';
}

export const environment = new ProdEnvironment();
