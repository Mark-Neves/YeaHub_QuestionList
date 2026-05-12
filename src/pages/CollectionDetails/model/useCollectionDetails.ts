import { useGetCollectionByIdQuery } from '@/entity/collection/api/collectionApi';
import { useGetQuestionsCollectionByIdQuery } from '@/entity/question/api/questionApi';

import { useToggle } from '@/shared/lib';
import { useParams } from 'react-router-dom';

export function useCollectionDetails() {
  const { collectionId } = useParams<{ collectionId: string }>();

  const id = collectionId ? Number(collectionId) : NaN;
  const isValidaton = Number.isFinite(id);

  const skip = { skip: !isValidaton };

  const {
    data: questions,
    isFetching: isLoadingQuestion,
    error: errorQuestion,
  } = useGetQuestionsCollectionByIdQuery(id, skip);

  const dataQuestions = { data: questions, isLoading: isLoadingQuestion, error: errorQuestion };

  const { data: collectionInfo, isFetching, error } = useGetCollectionByIdQuery(id, skip);
  const dataCollection = { collectionInfo, isLoadingCollection: isFetching, error };

  const {
    state: isSidebarHidden,
    toggleOn: sidebarClose,
    toggleOff: sidebarOpen,
  } = useToggle(true);
  return { dataQuestions, dataCollection, isSidebarHidden, sidebarClose, sidebarOpen };
}
