import './FilterSection_module.scss';
import type { Filters } from '@/entity/specialization/model/type';
import { complexity, normalizeDataFilter, parseIDs, rate } from '@/shared/helpers';
import { useFilterSection } from '../model/useFilterSection';
import Button from '@/shared/ui/Button';
import FilterSearch from '@/features/filter-search';
import FilterList from '@/features/filter-question';
import useUpdateUrl from '@/features/update-url';

type FilterSectionProps = {
  filterClose: () => void;
  filters: Filters;
};
export default function FilterSection({ filterClose, filters }: FilterSectionProps) {
  const { resetFilter, updateFilter } = useUpdateUrl();
  const { specializationsState, skillsState, hasActiveFilters } = useFilterSection(filters);
  return (
    <>
      <Button className='button-close' onClick={filterClose} label={'x'} />
      <FilterSearch text={filters.title} updateSearch={updateFilter} />
      <FilterList
        title={'Специализация'}
        body={specializationsState}
        isActive={parseIDs(filters.specializationId)}
        getLabel={(item) => (item ? item.title : '')}
        getValue={(item) => (item ? item.id : 0)}
        onSelect={(value) => updateFilter('specializationId', value)}
      />
      <FilterList
        title={'Навыки'}
        body={skillsState}
        isActive={parseIDs(filters.skills)}
        getLabel={(item) => (item ? item.title : '')}
        getValue={(item) => (item ? item.id : 0)}
        onSelect={(value) => updateFilter('skills', value)}
      />
      <FilterList
        title={'Уровень сложности'}
        body={normalizeDataFilter(complexity)}
        isActive={parseIDs(filters.complexity)}
        getLabel={(item) => item.title}
        getValue={(item) => item.level}
        onSelect={(value) => updateFilter('complexity', value)}
      />
      <FilterList
        title={'Рейтинг'}
        body={normalizeDataFilter(rate)}
        isActive={parseIDs(filters.rate)}
        getLabel={(item) => item.title}
        getValue={(item) => item.level}
        onSelect={(value) => updateFilter('rate', value)}
      />
      {hasActiveFilters && (
        <Button label='Очистить фильтры' className='clear_button' onClick={resetFilter} />
      )}
    </>
  );
}
