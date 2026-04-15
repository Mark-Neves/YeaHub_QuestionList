import './paginationList_module.scss';
import type { usePaginationReturn } from '../../types/paginationTypes';
import { getPaginationRange } from '../helpers';
import { PaginationItem } from '../PaginationItem/PaginationItem';
type PaginationListProps = Pick<usePaginationReturn, 'currentPage' | 'totalPage' | 'goTo'>;

export function PaginationList({ currentPage, totalPage, goTo }: PaginationListProps) {
  return (
    <ul className='pagination-list'>
      {getPaginationRange(currentPage, totalPage).map((page, i) => (
        <li key={i}>
          <PaginationItem page={page} goTo={goTo} active={page === currentPage} />
        </li>
      ))}
    </ul>
  );
}
