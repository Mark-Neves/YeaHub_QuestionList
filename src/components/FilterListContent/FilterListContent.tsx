import './filterContent_module.scss';
import { useToggle } from '../../hooks/useToggle';

import { ToggleCollapseButton } from '../../UI/ToggleCollapseButton';
import { DataBoundary } from '../DataBoundary/DataBoundary';
import type { FilterContentProps } from '../../types/filteresTypes';

export function FilterListContent<T>({
  body,
  isActive,
  getValue,
  getLabel,
  onSelect,
}: FilterContentProps<T>) {
  const { state: isCollapsed, toggle, toggleOn } = useToggle(true);

  const { data, isLoading, error } = body;

  return (
    <DataBoundary isLoading={isLoading} error={error} sceletonVariant='filters'>
      <ul className={`filter-list ${isCollapsed ? 'filter-list--collapsed' : ''}`}>
        {data.map((option) => {
          const value = getValue(option);

          const isActiveItem = Array.isArray(value)
            ? value.every((el) => isActive.includes(el))
            : isActive.includes(value);
          return (
            <li key={String(value)}>
              <button
                className={`filter-item ${isActiveItem ? 'filter-item--active' : ''}`}
                onClick={() => {
                  onSelect(String(value));
                  toggleOn();
                }}
                type='button'
              >
                {getLabel(option)}
              </button>
            </li>
          );
        })}
      </ul>
      {data.length > 15 && <ToggleCollapseButton state={isCollapsed} toggle={toggle} />}
    </DataBoundary>
  );
}
