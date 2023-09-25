import { Language } from '@shared/enums/language.enum';

export const getLanguageFromBrowserSettings = (): Language | null => {
  const { language } = navigator;

  if (['be', 'be-BY'].includes(language)) {
    return Language.BELARUSIAN;
  }

  if (['en', 'en-GB', 'en-US'].includes(language)) {
    return Language.ENGLISH;
  }

  if (['ru', 'ru-RU'].includes(language)) {
    return Language.RUSSIAN;
  }

  return null;
};
