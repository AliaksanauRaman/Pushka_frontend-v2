import { Language, checkIsLanguage } from '@shared/enums/language.enum';

export const determineLanguageBasedOnOneFromLocalStorage = (
  localStorageLanguage: string | null
): Language | null => {
  if (localStorageLanguage === null || checkIsLanguage(localStorageLanguage)) {
    return localStorageLanguage;
  }

  throw new Error(
    `Unknown language '${localStorageLanguage}' is found in local storage!`
  );
};
