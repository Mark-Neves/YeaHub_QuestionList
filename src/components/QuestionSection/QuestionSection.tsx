import type { QuestionSectionProps } from '../../types/questionTypes';

import { DataBoundary } from '../DataBoundary/DataBoundary';
import { QuestionContent } from '../QuestionContent/QuestionContent';

export function QuestionSection({
  questionsState,
  titleQuestions,
  resetFilter,
  filterOpen,
  updatePage,
  page,
}: QuestionSectionProps) {
  const { data: questions, isLoading, error } = questionsState;

  return (
    <DataBoundary isLoading={isLoading} error={error} sceletonVariant={'question'}>
      {questions && (
        <QuestionContent
          questions={questions}
          titleQuestions={titleQuestions}
          resetFilter={resetFilter}
          filterOpen={filterOpen}
          updatePage={updatePage}
          page={page}
        />
      )}
    </DataBoundary>
  );
}
