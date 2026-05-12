import { useGetSpecializationQuery } from '@/entity/specialization/api/specializationApi';
import FilterList from '@/features/filter-question';
import ResetFilter from '@/features/filter-reset';
import FilterSearch from '@/features/filter-search';
import useUpdateUrl from '@/features/update-url';
import { access } from '@/shared/lib/constants';
import { normalizeDataFilter, parseIDs } from '@/shared/lib/normalize';

export default function FilterCollection() {
  const { params, updateFilter, resetCollection } = useUpdateUrl();
  const { data, isLoading, error } = useGetSpecializationQuery();
  const specializationsState = {
    data,
    isLoading,
    error,
  };
  const { text, isFree, specializations } = params;
  const hasActiveFilters = Boolean(isFree?.length || specializations?.length);
  return (
    <>
      <FilterSearch text={text ?? ''} updateSearch={updateFilter} isCollection />
      <FilterList
        title={'Специализация'}
        body={specializationsState}
        isActive={parseIDs(specializations)}
        getLabel={(item) => (item ? item.title : '')}
        getValue={(item) => (item ? String(item.id) : '0')}
        onSelect={(value) => updateFilter('specializations', value)}
      />
      <FilterList
        title={'Доступ'}
        body={normalizeDataFilter(access)}
        isActive={parseIDs(isFree)}
        getLabel={(item) => item.title}
        getValue={(item) => item.level}
        onSelect={(value) => updateFilter('isFree', value)}
      />

      <ResetFilter activeFilters={hasActiveFilters} resetHandler={resetCollection} />
    </>
  );
}
