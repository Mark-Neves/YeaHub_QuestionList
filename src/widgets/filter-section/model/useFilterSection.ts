import { useGetSkillsQuery } from '@/entity/skill/api/skillsApi';
import { useGetSpecializationQuery } from '@/entity/specialization/api/specializationApi';
import type { Filters } from '@/entity/specialization/model/type';

export function useFilterSection(filters: Filters) {
  const {
    data: specialization,
    isLoading: isLoadingSpecialization,
    error: errorSpecialization,
  } = useGetSpecializationQuery();

  const specializationsState = {
    data: specialization,
    isLoading: isLoadingSpecialization,
    error: errorSpecialization,
  };
  const {
    data: skills,
    isFetching: isLoadingSkills,
    error: errorSkills,
  } = useGetSkillsQuery(filters.specializationId);
  const skillsState = {
    data: skills,
    isLoading: isLoadingSkills,
    error: errorSkills,
  };

  const hasActiveFilters = Boolean(
    filters.rate?.length || filters.complexity?.length || filters.skills?.length,
  );
  return { specializationsState, skillsState, hasActiveFilters };
}
