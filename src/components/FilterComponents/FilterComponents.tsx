import { FilterList } from '../FilterList/FilterList';
import { FilterSearch } from '../FilterSearch/FilterSearch';
import { complexity, normalizeDataFilter, parseIDs, rate } from '../helpers';

import { CloseSidebarButton } from '../../UI/CloseSidebarButton';

import { ClearFilterButton } from '../../UI/ClearFilterButton';
import type { Filters, FilterSectionProps, ResetFilter } from '../../types/filteresTypes';

type FilterComponentsProps = Pick<
  FilterSectionProps,
  'specializationsState' | 'skillsState' | 'filterClose' | 'filters' | 'updateFilter'
> &
  ResetFilter;
export function FilterComponents({
  specializationsState,
  skillsState,
  filters,
  updateFilter,
  resetFilter,
  filterClose,
}: FilterComponentsProps) {
  const updateSearch = (inputText: string): void => {
    updateFilter('title', inputText.trim());
  };
  const onSelectFilter = <T extends keyof Filters>(nameFilter: T) => {
    return (option: string): void => updateFilter(nameFilter, option);
  };

  const hasActiveFilters = Boolean(
    filters.rate?.length || filters.complexity?.length || filters.skills?.length,
  );
  return (
    <>
      <CloseSidebarButton onClick={filterClose} />
      <FilterSearch searchText={updateSearch} text={filters.title} />
      <FilterList
        title={'Специализация'}
        body={specializationsState}
        isActive={parseIDs(filters.specializationID)}
        getLabel={(item) => (item ? item.title : '')}
        getValue={(item) => (item ? item.id : 0)}
        onSelect={onSelectFilter('specializationID')}
      />
      <FilterList
        title={'Навыки'}
        body={skillsState}
        isActive={parseIDs(filters.skills)}
        getLabel={(item) => (item ? item.title : '')}
        getValue={(item) => (item ? item.id : 0)}
        onSelect={onSelectFilter('skills')}
      />
      <FilterList
        title={'Уровень сложности'}
        body={normalizeDataFilter(complexity)}
        isActive={parseIDs(filters.complexity)}
        getLabel={(item) => item.title}
        getValue={(item) => item.level}
        onSelect={onSelectFilter('complexity')}
      />
      <FilterList
        title={'Рейтинг'}
        body={normalizeDataFilter(rate)}
        isActive={parseIDs(filters.rate)}
        getLabel={(item) => item.title}
        getValue={(item) => item.level}
        onSelect={onSelectFilter('rate')}
      />
      {hasActiveFilters && <ClearFilterButton cleansing={resetFilter} />}
    </>
  );
}
