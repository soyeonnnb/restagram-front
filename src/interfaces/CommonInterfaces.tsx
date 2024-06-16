export interface PaginationResponse<T> {
  cursorId: number;
  list: T[];
  hasNext: boolean;
}
