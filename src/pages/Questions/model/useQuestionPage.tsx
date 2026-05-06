import { DEFAULT_SPECIALIZATION_ID } from '@/shared/helpers';
import { useSearchParams } from 'react-router-dom';

export function useQuestionPage() {
  const [searchParams] = useSearchParams();

  const filters = {
    specializationId: searchParams.get('specializationId') ?? String(DEFAULT_SPECIALIZATION_ID),
    skills: searchParams.get('skills') || '',
    complexity: searchParams.get('complexity') || '',
    rate: searchParams.get('rate') || '',
    page: searchParams.get('page') || '1',
    title: searchParams.get('title') || '',
  };

  return { filters };
}
