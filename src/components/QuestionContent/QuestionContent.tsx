import './questionsContent_module.scss';
import type { ApiResponse } from '../../types/apiTypes.ts';
import type { QuestionListItem, QuestionSectionProps } from '../../types/questionTypes.ts';
import { NoQuestions } from '../NoQuestions/NoQuestions';
import { Pagination } from '../Pagination/Pagination';
import { QuestionsList } from '../QuestionsList/QuestionsList';

type QuestionContentProps = Omit<QuestionSectionProps, 'questionsState'> & {
  questions: ApiResponse<QuestionListItem[]> | null;
};

export function QuestionContent({
  questions,
  titleQuestions,
  resetFilter,
  filterOpen,
  updatePage,
  page,
}: QuestionContentProps) {
  const isEmpty = questions !== null && questions.data.length === 0;

  return (
    <>
      {isEmpty ? (
        <NoQuestions resetFilter={resetFilter} />
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
            page={page}
            update={updatePage}
          />
        </div>
      )}
    </>
  );
}
