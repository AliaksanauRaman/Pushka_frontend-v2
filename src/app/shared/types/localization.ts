import { Language } from '@shared/enums/language.enum';

export class Localization {
  constructor(
    public readonly label: string,
    public readonly language: Language
  ) {}
}
