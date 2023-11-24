import { Localization } from '@shared/types/localization';

export class SelectLocalization {
  public static type = '[Selected Localization] Select';

  constructor(public readonly localization: Localization) {}
}
