import { useQuestionSection } from '../../model/useQuestionSection';

import DataBoundary from '@/shared/ui/DataBoundary';
import NoQuestions from '@/widgets/no-question';

import Pagination from '@/features/pagination-question';
import SceletonQuestion from '@/widgets/question-section/ui/SceletonQuestion';
import QuestionsList from '../QuestionList/QuestionsList';
import type { ApiResponse, FetchState } from '@/shared/model/type';
import type { QuestionItemProps } from '@/entity/question/model/type';
import NoQuestionCollection from '@/shared/ui/NoQuestionCollection';
import useCollectionContext from '@/shared/lib/collection-context/useCollectionContext';

type QuestionSectionProps = {
  filterOpen: () => void;
  questionData: FetchState<ApiResponse<QuestionItemProps[]>>;
};

export default function QuestionSection({ filterOpen, questionData }: QuestionSectionProps) {
  const { data: questions, isLoading, error } = questionData;
  const { titleQuestions, isEmpty } = useQuestionSection(questions);
  const collection = useCollectionContext();

  return (
    <DataBoundary
      data={questions}
      isLoading={isLoading}
      error={error}
      skeleton={<SceletonQuestion />}
    >
      {(questions) => (
        <>
          {isEmpty ? (
            collection ? (
              <NoQuestionCollection />
            ) : (
              <NoQuestions />
            )
          ) : (
            <section className='body-section'>
              <QuestionsList
                questions={questions.data}
                title={titleQuestions}
                onOpenFilter={filterOpen}
              />
              <Pagination
                total={questions.total}
                limit={questions.limit}
                page={Number(questions.page)}
              />
            </section>
          )}
        </>
      )}
    </DataBoundary>
  );
}
