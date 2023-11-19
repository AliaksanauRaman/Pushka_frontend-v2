export class PageableData<T> {
  public static buildEmpty<T>(): PageableData<T> {
    return new PageableData([], true, true, true, 0, 0, 0, 0, 1);
  }

  constructor(
    public readonly items: ReadonlyArray<T>,
    public readonly isPageEmpty: boolean,
    public readonly isFirstPage: boolean,
    public readonly isLastPage: boolean,
    public readonly pageIndex: number,
    public readonly pageItemsCount: number,
    public readonly pageSize: number,
    public readonly totalItemsCount: number,
    public readonly totalPagesCount: number
  ) {}
}
