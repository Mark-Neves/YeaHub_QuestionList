import { DEFAULT_SPECIALIZATION_ID, SINGLE_FIELDS, toggleMultiParams } from '@/shared/helpers';
import { useSearchParams } from 'react-router-dom';

export default function useUpdateUrl() {
  const [, setSearchParams] = useSearchParams();
  const resetFilter = (): void => {
    const params = new URLSearchParams();
    params.set('specializationId', String(DEFAULT_SPECIALIZATION_ID));
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
  return { resetFilter, updateFilter, updatePage };
}
