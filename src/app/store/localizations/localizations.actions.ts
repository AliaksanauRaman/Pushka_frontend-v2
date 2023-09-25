import { Localization } from '@shared/types/localization';

export class InitSelectedLocalization {
  public static type = '[Localizations] Init Selected';

  constructor(public readonly localization: Localization) {}
}

export class SelectLocalization {
  public static type = '[Localizations] Select';

  constructor(public readonly localization: Localization) {}
}
