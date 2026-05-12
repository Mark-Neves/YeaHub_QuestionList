import { useSearchParams } from 'react-router-dom';
import { normalizeParams, toggleParams } from '../lib/searchParamsHelpers';
import type { NameParamsType } from './typeParams';
import { DEFAULT_SPECIALIZATION_ID } from '@/shared/lib/constants';

export default function useUpdateUrl() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  const updateFilter = (nameParams: NameParamsType, value: string): void => {
    const current = Object.fromEntries(searchParams.entries());
    const params = normalizeParams(toggleParams(current, nameParams, value));
    setSearchParams(params);
  };

  const resetFilter = (): void => {
    const params = new URLSearchParams();
    params.set('specializationId', String(DEFAULT_SPECIALIZATION_ID));
    params.set('page', '1');
    setSearchParams(params);
  };

  const resetCollection = (): void => {
    setSearchParams();
  };
  const updatePage = (pageNum: number): void => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(pageNum));
    setSearchParams(params);
  };

  return { searchParams, params, resetFilter, resetCollection, updateFilter, updatePage };
}
