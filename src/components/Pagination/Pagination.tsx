import './pagination_module.scss';
import type { PaginationProps } from '../../types/paginationTypes';

import { usePagination } from './usePagination';
import { ButtonPagination } from '../../UI/ButtonPagination';
import { PaginationList } from '../PaginationList/PaginationList';

export function Pagination({ total, limit, page, update }: PaginationProps) {
  const { currentPage, totalPage, goNext, goPrev, goTo } = usePagination({
    total,
    limit,
    page,
    update,
  });

  if (typeof total !== 'number' || totalPage <= 1) return null;
  return (
    <div className='pagination'>
      <ButtonPagination disabled={currentPage === 1} onClick={goPrev} isPrev />
      <PaginationList currentPage={currentPage} totalPage={totalPage} goTo={goTo} />
      <ButtonPagination disabled={currentPage === totalPage} onClick={goNext} />
    </div>
  );
}
