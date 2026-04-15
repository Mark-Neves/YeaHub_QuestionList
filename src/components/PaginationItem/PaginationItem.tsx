import './paginationItem_module.scss';
import type { GetPaginationRangeReturn } from '../../types/paginationTypes';

interface PaginationItemProps {
  active: boolean;
  page: GetPaginationRangeReturn;
  goTo: (n: number) => void;
}
export function PaginationItem({ active, page, goTo }: PaginationItemProps) {
  return (
    <>
      {typeof page !== 'number' ? (
        <span>{page}</span>
      ) : (
        <button className={`item-visible ${active ? 'active' : ''}`} onClick={() => goTo(page)}>
          {page}
        </button>
      )}
    </>
  );
}
