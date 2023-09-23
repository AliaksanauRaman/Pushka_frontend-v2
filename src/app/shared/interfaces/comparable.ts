export interface IComparable<T = unknown> {
  equalsTo(value: T): boolean;
}
