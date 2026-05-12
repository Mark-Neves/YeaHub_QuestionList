import useUpdateUrl from '@/features/update-url';
import type { PaginationProps, usePaginationReturn } from './types';

export function usePagination({ total, limit, page }: PaginationProps): usePaginationReturn {
  const { updatePage } = useUpdateUrl();
  const totalPage = Math.ceil((total ?? 1) / (limit ?? 10));
  const currentPage = page >= 1 && page <= totalPage ? page : 1;
  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const goNext = () => {
    if (currentPage < totalPage) {
      updatePage(currentPage + 1);
      scrollTo();
    }
  };
  const goPrev = () => {
    if (currentPage > 1) {
      updatePage(currentPage - 1);
      scrollTo();
    }
  };
  const goTo = (n: number) => {
    if (n >= 1 && n <= totalPage) {
      updatePage(n);
      scrollTo();
    }
  };

  return { currentPage, totalPage, goNext, goPrev, goTo };
}
