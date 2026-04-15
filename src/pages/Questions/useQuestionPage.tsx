import { useSearchParams } from 'react-router-dom';
import {
  DEFAULT_SPECIALIZATION_ID,
  SINGLE_FIELDS,
  toggleMultiParams,
} from '../../components/helpers';

export function useQuestionPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = {
    specializationID: searchParams.get('specializationID') || String(DEFAULT_SPECIALIZATION_ID),
    skills: searchParams.get('skills') || '',
    complexity: searchParams.get('complexity') || '',
    rate: searchParams.get('rate') || '',
    page: searchParams.get('page') || '1',
    title: searchParams.get('title') || '',
  };

  const resetFilter = (): void => {
    const params = new URLSearchParams();
    params.set('specializationID', String(DEFAULT_SPECIALIZATION_ID));
    params.set('page', '1');
    setSearchParams(params);
  };

  const updateFilter = (name: string, value: string): void => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set('page', '1');

      if (SINGLE_FIELDS.has(name)) {
        params.set(name, value);
      } else {
        const current = prev.get(name)?.split(',').map(Number) || [];
        const values = value
          .split(',')
          .map(Number)
          .filter((n) => !Number.isNaN(n));
        params.set(name, toggleMultiParams(current, values));
      }

      return params;
    });
  };
  const updatePage = (pageNum: number): void => {
    updateFilter('page', String(pageNum));
  };

  return { filters, resetFilter, updateFilter, updatePage };
}
