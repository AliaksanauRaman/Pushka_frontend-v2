export class PageableData<T extends { readonly id: number }> {
  public static buildEmpty<
    T extends { readonly id: number }
  >(): PageableData<T> {
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

  public deleteItem(item: T): PageableData<T> {
    const newItems = this.items.filter(({ id }) => id !== item.id);

    return new PageableData(
      newItems,
      newItems.length === 0,
      this.isFirstPage,
      this.isLastPage,
      this.pageIndex,
      newItems.length,
      this.pageSize,
      this.totalItemsCount - 1,
      this.totalPagesCount
    );
  }
}
