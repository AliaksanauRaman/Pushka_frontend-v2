import { Language, checkIsLanguage } from '@shared/enums/language.enum';
import { LocalStorageKey } from '@shared/enums/local-storage-key.enum';

export const getLanguageFromPreviousSession = (): Language | null => {
  const language = localStorage.getItem(LocalStorageKey.LANGUAGE);

  if (language === null || !checkIsLanguage(language)) {
    return null;
  }

  return language;
};
