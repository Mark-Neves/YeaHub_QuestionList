import './PaginationList_module.scss';
import type { usePaginationReturn } from '@/features/pagination-question/model/types';
import Button from '@/shared/ui/Button';
import { getPaginationRange } from '../../model/helpers';
type PaginationListProps = Pick<usePaginationReturn, 'currentPage' | 'totalPage' | 'goTo'>;

export function PaginationList({ currentPage, totalPage, goTo }: PaginationListProps) {
  return (
    <ul className='pagination-list'>
      {getPaginationRange(currentPage, totalPage).map((page, i) => (
        <li key={i}>
          {typeof page === 'number' ? (
            <Button
              className={`item-visible ${page === currentPage ? 'active' : ''}`}
              label={String(page)}
              onClick={() => goTo(page)}
            />
          ) : (
            <span>{page}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
