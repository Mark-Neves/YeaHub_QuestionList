import { useParams } from 'react-router-dom';
import { useFetcher } from '../../hooks/useFetcher';
import type { QuestionDetails } from '../../types/questionTypes';

export function useQuestionDetalies() {
  const { id } = useParams<{ id: string }>();

  const {
    data: question,
    isLoading: isLoadingDetails,
    error: errorDetails,
  } = useFetcher<QuestionDetails>(`/questions/public-questions/${id}`);

  return { question, isLoadingDetails, errorDetails };
}
