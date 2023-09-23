import { Comparable } from '@shared/interfaces/comparable';

export class City implements Comparable<City> {
  constructor(public readonly id: number, public readonly label: string) {}

  public equalsTo(value: City): boolean {
    return this.id === value.id && this.label === value.label;
  }
}
