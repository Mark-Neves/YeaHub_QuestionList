import './ResetFilterButton_module.scss';
import Button from '@/shared/ui/Button';
type ResetFilterProps = {
  activeFilters: boolean;
  resetHandler: () => void;
};
export default function ResetFilter({ activeFilters, resetHandler }: ResetFilterProps) {
  if (activeFilters)
    return <Button label='Очистить фильтры' className='clear_button' onClick={resetHandler} />;
  return null;
}
