import DataBoundary from '@/shared/ui/DataBoundary';
import SceletonDetails from './SceletonDetails';
import AnswerDetails from '@/widgets/answer-details';
import Sidebar from '@/widgets/sidebar';
import { AnswerDetailsInfo } from '@/entity/answer';
import { useQuestionDetails } from '../model/useQuestionDetails';

export default function QuestionDetails() {
  const { dataAnswer, isSidebarHidden, sidebarClose, sidebarOpen } = useQuestionDetails();
  const { answer, isLoading, error } = dataAnswer;
  return (
    <DataBoundary data={answer} isLoading={isLoading} error={error} skeleton={<SceletonDetails />}>
      {(answer) => (
        <>
          <AnswerDetails answer={answer} onClick={sidebarOpen} />
          <Sidebar isHidden={isSidebarHidden} filterClose={sidebarClose}>
            <AnswerDetailsInfo answer={answer} />
          </Sidebar>
        </>
      )}
    </DataBoundary>
  );
}
