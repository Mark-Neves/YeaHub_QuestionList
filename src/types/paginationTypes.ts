export interface PaginationProps {
  total: number;
  limit: number;
  page: number;
  update: (pageNum: number) => void;
}

export type GetPaginationRangeReturn = number | '...';

export interface usePaginationReturn {
  currentPage: number;
  totalPage: number;
  goNext: () => void;
  goPrev: () => void;
  goTo: (n: number) => void;
}
