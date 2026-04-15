interface ClearSearchProps {
  clearFilter: () => void;
}
export function ClearSearch({ clearFilter }: ClearSearchProps) {
  return (
    <button className='clear-filter' onClick={clearFilter} aria-label='Очистить фильтр'>
      x
    </button>
  );
}
