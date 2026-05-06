import { useToggle } from '@/shared/lib/hooks/useToggle';
import { useParams } from 'react-router-dom';
import { useGetAnswerByIdQuery } from '@/entity/answer/api/answerApi';

import DataBoundary from '@/shared/ui/DataBoundary';
import { SceletonDetails } from './SceletonDetails';
import AnswerDetails from '@/widgets/answer-details';
import Sidebar from '@/widgets/sidebar';
import { AnswerDetailsInfo } from '@/entity/answer';

export default function QuestionDetails() {
  const { id } = useParams<{ id: string }>();
  const questionId = id ? Number(id) : NaN;
  const isValidaton = Number.isFinite(questionId);
  const {
    data: answer,
    isFetching,
    error,
  } = useGetAnswerByIdQuery(questionId, { skip: !isValidaton });

  const {
    state: isSidebarHidden,
    toggleOn: sidebarClose,
    toggleOff: sidebarOpen,
  } = useToggle(true);

  return (
    <DataBoundary data={answer} isLoading={isFetching} error={error} skeleton={<SceletonDetails />}>
      {(answer) => (
        <>
          <AnswerDetails answer={answer} onClick={sidebarOpen} />
          <Sidebar isHidden={isSidebarHidden} filterClose={sidebarClose}>
            <AnswerDetailsInfo answer={answer} onClick={sidebarClose} />
          </Sidebar>
        </>
      )}
    </DataBoundary>
  );
}
