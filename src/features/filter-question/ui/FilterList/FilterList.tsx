import './filterList_module.scss';

import DataBoundary from '@/shared/ui/DataBoundary';
import { FilterListContent } from '../FilterListContent/FilterListContent';
import { SceletonFilterList } from '../FilterListContent/SceletonFilterList';
import type { FilterListProps } from '../../model/type';

export default function FilterList<T>({
  title,
  body,
  isActive,
  getValue,
  getLabel,
  onSelect,
}: FilterListProps<T>) {
  const { data, isLoading, error } = body;
  return (
    <div className='filter-container'>
      <h4 className='filter-title'>{title}</h4>
      <DataBoundary
        data={data}
        isLoading={isLoading}
        error={error}
        skeleton={<SceletonFilterList />}
        isFilter
      >
        {(data) => (
          <FilterListContent
            filters={data}
            isActive={isActive}
            getValue={getValue}
            getLabel={getLabel}
            onSelect={onSelect}
          />
        )}
      </DataBoundary>
    </div>
  );
}
