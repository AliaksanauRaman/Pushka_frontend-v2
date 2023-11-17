import { MyApplicationOptionType } from '@shared/enums/my-application-option-type.enum';
import { IComparable } from '@shared/interfaces/comparable';

export class MyApplicationTypeOption
  implements IComparable<MyApplicationTypeOption>
{
  constructor(
    public readonly type: MyApplicationOptionType,
    public readonly label: string
  ) {}

  public equalsTo({ type, label }: MyApplicationTypeOption): boolean {
    return this.type === type && this.label === label;
  }
}
