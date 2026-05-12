import type { FetchState } from '@/shared/model/type';

export interface FilterListProps<T> {
  title: string;
  body: FetchState<T[]>;
  isActive: (number | string)[];
  getValue: (item: T) => string | number | number[];
  getLabel: (item: T) => string;
  onSelect: (value: string) => void;
}
