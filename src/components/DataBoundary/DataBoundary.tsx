import type { SceletonVariant } from '../../types/apiTypes.ts';
import { type ReactNode } from 'react';

import { DinamicSceleton } from '../../UI/DinamicSceleton';
import { ErrorMessage } from '../ErrorMessage';

interface DataBoundaryProps {
  sceletonVariant: SceletonVariant;
  isLoading: boolean;
  error: string | null;
  children: ReactNode;
}

export function DataBoundary({ isLoading, error, sceletonVariant, children }: DataBoundaryProps) {
  const filterError = Boolean(sceletonVariant === 'filters');
  if (isLoading) return <DinamicSceleton variant={sceletonVariant} />;
  if (error) return <ErrorMessage hasFiltersError={filterError} />;
  return children;
}
