import './PaginationButton_module.scss';
import type { usePaginationReturn } from '@/features/pagination-question/model/types';
import Button from '@/shared/ui/Button';
import { QuestionSvg } from '@/shared/ui/Icon';

type PaginationButtonProps = Pick<usePaginationReturn, 'currentPage'> & {
  active: boolean;
  isPrev?: boolean;
  onClick: () => void;
};
export function PaginationButton({
  currentPage,
  onClick,
  active,
  isPrev = false,
}: PaginationButtonProps) {
  return (
    <Button
      disabled={currentPage === 1}
      onClick={onClick}
      className={`pagination-button  ${isPrev ? 'button-prev' : 'button-next'} ${active ? 'disabled' : ''}`}
    >
      <QuestionSvg />
    </Button>
  );
}
