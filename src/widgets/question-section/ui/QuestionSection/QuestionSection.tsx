import './QuestionSection_module.scss';
import type { QuestionSectionProps } from '@/entity/question/model/type';

import DataBoundary from '@/shared/ui/DataBoundary';
import NoQuestions from '@/widgets/no-question';

import Pagination from '@/features/pagination-question';
import { SceletonQuestion } from '@/widgets/question-section/ui/QuestionSection/SceletonQuestion';
import { useGetQuestionQuery } from '@/entity/question/api/questionApi';
import { useGetSpecializationQuery } from '@/entity/specialization/api/specializationApi';
import QuestionsList from '../QuestionList/QuestionsList';

export default function QuestionSection({ filters, filterOpen }: QuestionSectionProps) {
  const { data: questions, isFetching, error } = useGetQuestionQuery(filters);
  const { data: specializations } = useGetSpecializationQuery();
  const titleQuestions =
    specializations?.find(
      (specialization) => specialization.id === Number(filters.specializationId),
    )?.title ?? 'База вопросов';

  const isEmpty = questions !== undefined && questions.data.length === 0;

  return (
    <DataBoundary
      data={questions}
      isLoading={isFetching}
      error={error}
      skeleton={<SceletonQuestion />}
    >
      {(questions) => (
        <>
          {isEmpty ? (
            <NoQuestions />
          ) : (
            <div className='questions responsive-width-body'>
              <QuestionsList
                questions={questions!.data}
                title={titleQuestions}
                onOpenFilter={filterOpen}
              />
              <Pagination
                total={questions!.total}
                limit={questions!.limit}
                page={Number(filters.page)}
              />
            </div>
          )}
        </>
      )}
    </DataBoundary>
  );
}
