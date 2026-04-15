import type { PaginationProps, usePaginationReturn } from '../../types/paginationTypes';

export function usePagination({
  total,
  limit,
  page,
  update,
}: PaginationProps): usePaginationReturn {
  const totalPage = Math.ceil((total || 1) / (limit || 10));
  const currentPage = page >= 1 && page <= totalPage ? page : 1;

  const goNext = () => {
    if (currentPage < totalPage) {
      update(currentPage + 1);
    }
  };
  const goPrev = () => {
    if (currentPage > 1) {
      update(currentPage - 1);
    }
  };
  const goTo = (n: number) => {
    if (n >= 1 && n <= totalPage) {
      update(n);
    }
  };

  return { currentPage, totalPage, goNext, goPrev, goTo };
}
