import { useFilterSection } from '../model/useFilterSection';
import FilterSearch from '@/features/filter-search';
import FilterList from '@/features/filter-question';
import useUpdateUrl from '@/features/update-url';
import ResetFilter from '@/features/filter-reset';
import { normalizeDataFilter, parseIDs } from '@/shared/lib/normalize';
import { complexity, DEFAULT_SPECIALIZATION_ID, rate } from '@/shared/lib/constants';

export default function FilterSection() {
  const { params, resetFilter, updateFilter } = useUpdateUrl();
  const { specializationsState, skillsState, hasActiveFilters } = useFilterSection();
  return (
    <>
      <FilterSearch text={params.title ?? ''} updateSearch={updateFilter} />
      <FilterList
        title={'Специализация'}
        body={specializationsState}
        isActive={parseIDs(params.specializationId ?? String(DEFAULT_SPECIALIZATION_ID))}
        getLabel={(item) => (item ? item.title : '')}
        getValue={(item) => (item ? item.id : 0)}
        onSelect={(value) => updateFilter('specializationId', value)}
      />
      <FilterList
        title={'Навыки'}
        body={skillsState}
        isActive={parseIDs(params.skills)}
        getLabel={(item) => (item ? item.title : '')}
        getValue={(item) => (item ? item.id : 0)}
        onSelect={(value) => updateFilter('skills', value)}
      />
      <FilterList
        title={'Уровень сложности'}
        body={normalizeDataFilter(complexity)}
        isActive={parseIDs(params.complexity)}
        getLabel={(item) => item.title}
        getValue={(item) => item.level}
        onSelect={(value) => updateFilter('complexity', value)}
      />
      <FilterList
        title={'Рейтинг'}
        body={normalizeDataFilter(rate)}
        isActive={parseIDs(params.rate)}
        getLabel={(item) => item.title}
        getValue={(item) => item.level}
        onSelect={(value) => updateFilter('rate', value)}
      />
      <ResetFilter activeFilters={hasActiveFilters} resetHandler={resetFilter} />
    </>
  );
}
