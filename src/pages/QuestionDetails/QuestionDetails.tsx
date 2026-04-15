import { Details } from '../../components/Details/Details';
import { useQuestionDetalies } from './useQuestionDetalies';
import { DetailsInfo } from '../../components/DetailsInfo/DetailsInfo';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { useToggle } from '../../hooks/useToggle';
import { DataBoundary } from '../../components/DataBoundary/DataBoundary';

export function QuestionDetails() {
  const { question, isLoadingDetails, errorDetails } = useQuestionDetalies();
  const {
    state: isSidebarHidden,
    toggleOn: sidebarClose,
    toggleOff: sidebarOpen,
  } = useToggle(true);

  return (
    <DataBoundary isLoading={isLoadingDetails} error={errorDetails} sceletonVariant='details'>
      {question && (
        <>
          <Details
            title={question.title}
            description={question.description}
            shortAnswer={question.shortAnswer}
            longAnswer={question.longAnswer}
            onClick={sidebarOpen}
          />
          <Sidebar isHidden={isSidebarHidden} filterClose={sidebarClose}>
            <DetailsInfo
              rate={question.rate}
              complexity={question.complexity}
              questionSkills={question.questionSkills}
              keywords={question.keywords}
              onClick={sidebarClose}
            />
          </Sidebar>
        </>
      )}
    </DataBoundary>
  );
}
