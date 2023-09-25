import { LocalizationsStateModel } from './model';
import { getLanguageFromPreviousSession } from './get-language-from-previous-session';
import { getLanguageFromBrowserSettings } from './get-language-from-browser-settings';
import { Localization } from '@shared/types/localization';
import { Language } from '@shared/enums/language.enum';

const LOCALIZATIONS = [
  new Localization('BY', Language.BELARUSIAN),
  new Localization('EN', Language.ENGLISH),
  new Localization('RU', Language.RUSSIAN),
];

const initialLanguage =
  getLanguageFromPreviousSession() ||
  getLanguageFromBrowserSettings() ||
  Language.BELARUSIAN;

const initialLocalization = LOCALIZATIONS.find(
  (localization) => localization.language === initialLanguage
);

if (initialLocalization === undefined) {
  throw new Error('The initial localization must be defined!');
}

export const LOCALIZATIONS_DEFAULTS: LocalizationsStateModel = {
  list: LOCALIZATIONS,
  selected: initialLocalization,
};
