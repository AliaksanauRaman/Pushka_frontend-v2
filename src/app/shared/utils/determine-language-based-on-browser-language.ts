import { Language } from '@shared/enums/language.enum';

export const determineLanguageBasedOnBrowserLanguage = (
  browserLanguage: string
): Language | null => {
  if (['be', 'be-BY'].includes(browserLanguage)) {
    return Language.BELARUSIAN;
  }

  if (['en', 'en-GB', 'en-US'].includes(browserLanguage)) {
    return Language.ENGLISH;
  }

  if (['ru', 'ru-RU'].includes(browserLanguage)) {
    return Language.RUSSIAN;
  }

  return null;
};
