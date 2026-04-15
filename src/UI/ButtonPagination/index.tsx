import './buttonPagination_module.scss';
import { QuestionSvg } from '../QuestionsSvg';

interface ButtonPaginationProps {
  disabled: boolean;
  isPrev?: boolean;
  onClick: () => void;
}

export function ButtonPagination({ disabled, onClick, isPrev }: ButtonPaginationProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`pagination-button ${isPrev ? 'button-prev' : 'button-next'} ${disabled ? 'disabled' : ''}`}
    >
      <QuestionSvg />
    </button>
  );
}
