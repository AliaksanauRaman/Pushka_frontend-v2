import { MyApplicationOptionType } from '@shared/enums/my-application-option-type.enum';

export class MyApplicationTypeOption {
  constructor(
    public readonly type: MyApplicationOptionType,
    public readonly label: string
  ) {}
}
