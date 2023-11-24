import { Pipe, PipeTransform } from '@angular/core';

import { MyApplicationOptionType } from '@shared/enums/my-application-option-type.enum';

@Pipe({
  name: 'myApplicationTypeOptionId',
  standalone: true,
})
export class MyApplicationTypeOptionIdPipe implements PipeTransform {
  public transform(value: MyApplicationOptionType): string {
    return `my-application-type-option-${value.toLowerCase()}`;
  }
}
