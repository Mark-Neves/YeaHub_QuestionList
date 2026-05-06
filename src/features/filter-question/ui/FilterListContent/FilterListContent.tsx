import './filterContent_module.scss';

import { useToggle } from '@/shared/lib/hooks/useToggle';
import Button from '@/shared/ui/Button';
import type { FilterListProps } from '../../model/type';
type FilterContentProps<T> = Omit<FilterListProps<T>, 'title' | 'body'> & { filters: T[] };
export function FilterListContent<T>({
  filters,
  isActive,
  getLabel,
  getValue,
  onSelect,
}: FilterContentProps<T>) {
  const { state: isCollapsed, toggle, toggleOn } = useToggle(true);

  return (
    <>
      <ul className={`filter-list ${isCollapsed ? 'filter-list--collapsed' : ''}`}>
        {filters.map((option) => {
          const value = getValue(option);
          const isActiveItem = Array.isArray(value)
            ? value.every((el) => isActive.includes(el))
            : isActive.includes(value);

          const handleClick = () => {
            onSelect(String(value));
            toggleOn();
          };
          return (
            <li key={String(value)}>
              <Button
                className={`filter-item ${isActiveItem ? 'filter-item--active' : ''}`}
                label={getLabel(option)}
                onClick={handleClick}
              />
            </li>
          );
        })}
      </ul>

      {filters.length > 15 && (
        <Button
          className='collapse-button'
          label={isCollapsed ? 'Посмотреть все' : 'Скрыть'}
          onClick={toggle}
        />
      )}
    </>
  );
}
