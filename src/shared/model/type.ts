import type { ReactNode } from 'react';
import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export type Children = {
  children: ReactNode;
};

export interface ApiResponse<T> {
  data: T;
  page: number;
  total: number;
  limit: number;
}

export interface FetchState<T> {
  data: T | undefined;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
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
export interface Access {
  title: string;
  level: string;
}

export interface LinkList {
  name: string;
  path: string;
  logo?: string;
}
