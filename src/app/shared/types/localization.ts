import { IComparable } from '@shared/interfaces/comparable';
import { Language } from '@shared/enums/language.enum';
import { Locale } from '@shared/enums/locale.enum';

export class Localization implements IComparable<Localization> {
  constructor(
    public readonly label: string,
    public readonly language: Language,
    public readonly locale: Locale
  ) {}

  public equalsTo({ label, language, locale }: Localization): boolean {
    return (
      this.label === label &&
      this.language === language &&
      this.locale === locale
    );
  }
}
