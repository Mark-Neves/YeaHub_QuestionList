import { useDebounce } from '@/shared/lib';
import { useEffect, useState } from 'react';
import type { FilterSearchProps } from './types';

export const useFilterSearch = ({ text, updateSearch }: FilterSearchProps) => {
  const searchText = (inputText: string): void => {
    updateSearch('title', inputText.trim());
  };

  const [value, setValue] = useState(text ?? '');
  const debounceValue = useDebounce(value, 600);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };
  const clearFilter = (): void => {
    setValue('');
  };

  useEffect(() => {
    searchText(debounceValue);
  }, [debounceValue]);
  return { value, handleChange, clearFilter };
};
