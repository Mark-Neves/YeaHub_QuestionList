import './Pagination_module.scss';
import type { PaginationProps } from '@/features/pagination-question/model/types';
import { PaginationButton, usePagination, PaginationList } from '@/features/pagination-question';

export default function Pagination({ total, limit, page }: PaginationProps) {
  const { currentPage, totalPage, goNext, goPrev, goTo } = usePagination({
    total,
    limit,
    page,
  });

  if (typeof total !== 'number' || totalPage <= 1) return null;
  return (
    <div className='pagination'>
      <PaginationButton
        currentPage={currentPage}
        onClick={goPrev}
        active={currentPage === 1}
        isPrev
      />
      <PaginationList currentPage={currentPage} totalPage={totalPage} goTo={goTo} />
      <PaginationButton
        currentPage={currentPage}
        onClick={goNext}
        active={currentPage === totalPage}
      />
    </div>
  );
}
