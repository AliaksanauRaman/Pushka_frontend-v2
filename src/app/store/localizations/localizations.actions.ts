import { Localization } from '@shared/types/localization';

export class SelectLocalization {
  public static type = '[Localizations] Select';

  constructor(public readonly localization: Localization) {}
}
