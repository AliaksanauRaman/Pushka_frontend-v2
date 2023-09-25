export enum Language {
  BELARUSIAN = 'by',
  ENGLISH = 'en',
  RUSSIAN = 'ru',
}

export const checkIsLanguage = (value: string): value is Language => {
  return (
    value === Language.BELARUSIAN ||
    value === Language.ENGLISH ||
    value === Language.RUSSIAN
  );
};
