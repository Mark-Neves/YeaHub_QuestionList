import './clearFilterButton_module.scss';
interface ClearFilterButtonProps {
  cleansing: () => void;
}
export function ClearFilterButton({ cleansing }: ClearFilterButtonProps) {
  return (
    <button className='clear_button' onClick={cleansing}>
      Очистить фильтры
    </button>
  );
}
