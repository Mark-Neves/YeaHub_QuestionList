import './filterSearch_module.scss';

import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { ClearSearch } from '../../UI/ClearSearch/Index';

interface FilterSearchProps {
  searchText: (inputText: string) => void;
  text: string | null;
}
export function FilterSearch({ text, searchText }: FilterSearchProps) {
  const [value, setValue] = useState<string>(text ?? '');
  const debounceValue = useDebounce<string>(value, 800);

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };
  const clearFilter = (): void => {
    setValue('');
  };

  useEffect(() => {
    searchText(debounceValue);
  }, [debounceValue]);

  return (
    <>
      <input
        name='Фильтр поиска'
        type='text'
        placeholder='Введите запрос...'
        className='search-input'
        value={value}
        onChange={changeValue}
        aria-label='Фильтр поиска'
      />
      {value && <ClearSearch clearFilter={clearFilter} />}
    </>
  );
}
