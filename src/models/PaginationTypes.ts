// API Response
export interface IAPIResponseData<T> {
  totalPages: number;
  currentPage: number;
  count: number;
  data: T;
}
