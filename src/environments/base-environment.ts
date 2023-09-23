export abstract class BaseEnvironment {
  public abstract readonly isProduction: boolean;
  public abstract readonly apiUrl: string;
}
