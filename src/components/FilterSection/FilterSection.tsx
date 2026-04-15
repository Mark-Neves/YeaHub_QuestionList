import type { FilterSectionProps } from '../../types/filteresTypes';
import { FilterComponents } from '../FilterComponents/FilterComponents';
import { Sidebar } from '../Sidebar/Sidebar';

export function FilterSection({
  specializationsState,
  skillsState,
  isFilterHidden,
  filterClose,
  resetFilter,
  updateFilter,
  filters,
}: FilterSectionProps) {
  return (
    <Sidebar isHidden={isFilterHidden} filterClose={filterClose}>
      <FilterComponents
        filters={filters}
        specializationsState={specializationsState}
        skillsState={skillsState}
        updateFilter={updateFilter}
        resetFilter={resetFilter}
        filterClose={filterClose}
      />
    </Sidebar>
  );
}
