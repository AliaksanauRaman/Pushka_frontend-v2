import { PageableResponse } from '@shared/types/pageable-response';
import { PageableData } from '@shared/types/pageable-data';

export const mapToPageableData = <T>({
  content,
  empty,
  first,
  last,
  number,
  numberOfElements,
  size,
  totalElements,
  totalPages,
}: PageableResponse<T>): PageableData<T> => {
  return new PageableData(
    content,
    empty,
    first,
    last,
    number,
    numberOfElements,
    size,
    totalElements,
    totalPages
  );
};
