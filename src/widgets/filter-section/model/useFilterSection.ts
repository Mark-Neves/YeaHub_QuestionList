import { useGetSkillsQuery } from '@/entity/skill/api/skillsApi';
import { useGetSpecializationQuery } from '@/entity/specialization/api/specializationApi';
import useUpdateUrl from '@/features/update-url';
import { DEFAULT_SPECIALIZATION_ID } from '@/shared/lib/constants';

export function useFilterSection() {
  const { params } = useUpdateUrl();

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
  } = useGetSkillsQuery(params.specializationId ?? DEFAULT_SPECIALIZATION_ID);
  const skillsState = {
    data: skills,
    isLoading: isLoadingSkills,
    error: errorSkills,
  };

  const hasActiveFilters = Boolean(
    params.rate?.length || params.complexity?.length || params.skills?.length,
  );
  return { specializationsState, skillsState, hasActiveFilters };
}
