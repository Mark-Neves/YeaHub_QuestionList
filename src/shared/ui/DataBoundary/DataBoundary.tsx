import { type ReactNode } from 'react';
import ErrorMessage from '../ErrorMessage/index.ts';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';

interface DataBoundaryProps<T> {
  data?: T;
  skeleton: ReactNode;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  isFilter?: boolean;
  children: (data: T) => ReactNode;
}

export default function DataBoundary<T>({
  data,
  isLoading,
  error,
  skeleton,
  children,
  isFilter,
}: DataBoundaryProps<T>) {
  if (isLoading) return skeleton;
  if (error) return <ErrorMessage hasFiltersError={isFilter} />;
  if (!data) return skeleton;
  return children(data);
}
