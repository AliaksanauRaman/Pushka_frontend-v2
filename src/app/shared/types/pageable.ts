export class Pageable<T> {
  public static buildEmpty<T>(): Pageable<T> {
    return new Pageable<T>([], true, true, true, 0, 0, 0, 0, 0);
  }

  constructor(
    // sort
    // pageable
    public readonly content: ReadonlyArray<T>,
    public readonly empty: boolean,
    public readonly first: boolean,
    public readonly last: boolean,
    public readonly number: number,
    public readonly numberOfElements: number,
    public readonly size: number,
    public readonly totalElements: number,
    public readonly totalPages: number
  ) {}
}
