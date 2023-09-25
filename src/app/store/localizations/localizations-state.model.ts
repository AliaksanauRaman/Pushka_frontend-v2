import { Localization } from '@shared/types/localization';

export type LocalizationsStateModel = Readonly<{
  list: ReadonlyArray<Localization>;
  selected: Localization;
}>;
