import { Language } from '@shared/enums/language.enum';
import { Locale } from '@shared/enums/locale.enum';

export class Localization {
  constructor(
    public readonly label: string,
    public readonly language: Language,
    public readonly locale: Locale
  ) {}
}
