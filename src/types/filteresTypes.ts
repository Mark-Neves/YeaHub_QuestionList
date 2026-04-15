import type { ReactNode } from 'react';
import type { ResponseResult, Skill, Specialization } from './apiTypes.ts';

export type Filters = {
  specializationID: string | null;
  skills: string | null;
  complexity: string | null;
  rate: string | null;
  page: string | null;
  title: string | null;
};
export type UpdateFilter = (name: string, value: string) => void;

export type ResetFilter = {
  resetFilter: () => void;
};

export interface SidebarProps {
  isHidden: boolean;
  children: ReactNode;
  filterClose: () => void;
}

export interface FilterSectionProps extends ResetFilter {
  specializationsState: ResponseResult<Specialization[]>;
  skillsState: ResponseResult<Skill[]>;
  isFilterHidden: boolean;
  filterClose: () => void;
  filters: Filters;
  updateFilter: (name: string, value: string) => void;
}

export interface FilterListProps<T> {
  title: string;
  body: ResponseResult<T[]>;
  isActive: number[];
  getValue: (item: T) => number | number[];
  getLabel: (item: T) => string;
  onSelect: (option: string) => void;
}

export type FilterContentProps<T> = Omit<FilterListProps<T>, 'title'>;
