import './filterList_module.scss';
import { FilterListContent } from '../FilterListContent/FilterListContent';
import type { FilterListProps } from '../../types/filteresTypes';

export function FilterList<T>({
  title,
  body,
  isActive,
  getValue,
  getLabel,
  onSelect,
}: FilterListProps<T>) {
  return (
    <div className='filter-container'>
      <h4 className='filter-title'>{title}</h4>
      <FilterListContent
        body={body}
        isActive={isActive}
        getValue={getValue}
        getLabel={getLabel}
        onSelect={onSelect}
      />
    </div>
  );
}
