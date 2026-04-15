import { SceletonFilterList } from '../../components/FilterListContent/SceletonFilterList';
import { Loader } from '../../components/Loader';
import { SceletonDetails } from '../../pages/QuestionDetails/SceletonDetails';
import { SceletonQuestion } from '../../pages/Questions/SceletonQuestion';
import type { SceletonVariant } from '../../types/apiTypes.ts';

interface DinamicSceletonProps {
  variant: SceletonVariant;
}
export function DinamicSceleton({ variant }: DinamicSceletonProps) {
  switch (variant) {
    case 'question':
      return <SceletonQuestion />;
    case 'details':
      return <SceletonDetails />;
    case 'filters':
      return <SceletonFilterList />;
    default:
      return <Loader />;
  }
}
