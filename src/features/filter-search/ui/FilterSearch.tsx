import './FilterSearch_module.scss';
import type { FilterSearchProps } from '../model/types';
import Button from '@/shared/ui/Button';
import { useFilterSearch } from '../model/useFilterSearch';

export default function FilterSearch({ text, updateSearch, isCollection }: FilterSearchProps) {
  const { value, handleChange, clearFilter } = useFilterSearch({
    text,
    updateSearch,
    isCollection,
  });

  return (
    <>
      <input
        name='search'
        type='text'
        placeholder='Введите запрос...'
        className='search-input'
        value={value}
        onChange={handleChange}
        aria-label='Фильтр поиска'
      />

      {value && <Button className='clear-filter' label={'x'} onClick={clearFilter} />}
    </>
  );
}
