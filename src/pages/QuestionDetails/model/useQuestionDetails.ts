import { useGetAnswerByIdQuery } from '@/entity/answer/api/answerApi';
import { useToggle } from '@/shared/lib';
import { useParams } from 'react-router-dom';

export function useQuestionDetails() {
  const { id } = useParams<{ id: string }>();
  const questionId = id ? Number(id) : NaN;
  const isValidaton = Number.isFinite(questionId);
  const {
    data: answer,
    isFetching,
    error,
  } = useGetAnswerByIdQuery(questionId, { skip: !isValidaton });
  const dataAnswer = { answer, isLoading: isFetching, error };

  const {
    state: isSidebarHidden,
    toggleOn: sidebarClose,
    toggleOff: sidebarOpen,
  } = useToggle(true);
  return { dataAnswer, isSidebarHidden, sidebarClose, sidebarOpen };
}
