export type SceletonVariant = 'question' | 'details' | 'filters';

export interface ApiResponse<T> {
  data: T;
  page: number;
  total: number;
  limit: number;
}

export interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export interface ResponseResult<T> {
  data: T;
  isLoading: boolean;
  error: string | null;
}

export interface Skill {
  id: number;
  title: string;
  slug: string;
  description: string;
  createdBy?: string;
}

export interface Specialization {
  id: number;
  title: string;
  slug: string;
  description: string;
  createdBy?: string;
}
export interface Complexity {
  title: string;
  level: number[];
}
export interface Rate {
  title: string;
  level: number;
}

export interface SidebarButtonProps {
  onClick: () => void;
}
export interface LinkList {
  name: string;
  path: string;
  logo?: string;
}
